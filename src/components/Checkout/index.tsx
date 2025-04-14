import { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { CircleLoader } from 'react-spinners'

import { RootState } from '../../store'
import { closeCart, openCart, clear } from '../../store/reducers/cart'
import { useCheckoutMutation } from '../../services/api'
import DeliveryForm from './DeliveryForm'
import PaymentForm from './PaymentForm'
import OrderSuccess from './OrderSuccess'
import * as S from './styles'

enum CheckoutStep {
  DELIVERY = 0,
  PAYMENT = 1,
  SUCCESS = 2
}

const Checkout = () => {
  const { isCheckoutOpen, items } = useSelector(
    (state: RootState) => state.cart
  )
  const [currentStep, setCurrentStep] = useState<CheckoutStep>(
    CheckoutStep.DELIVERY
  )
  const [direction, setDirection] = useState<'forward' | 'backward'>('forward')
  const [isLoading, setIsLoading] = useState(false)
  const [formData, setFormData] = useState<{
    delivery: DeliveryFormValues | null
    payment: PaymentFormValues | null
    orderId: string | null
  }>({
    delivery: null,
    payment: null,
    orderId: null
  })
  const [paymentFormValues, setPaymentFormValues] =
    useState<PaymentFormValues | null>(null)
  const [isClosingToCart, setIsClosingToCart] = useState(false)

  const dispatch = useDispatch()
  const [checkout, { isSuccess, data }] = useCheckoutMutation()

  // Reset form when checkout is closed
  useEffect(() => {
    if (!isCheckoutOpen && !isClosingToCart) {
      setCurrentStep(CheckoutStep.DELIVERY)
      setFormData({
        delivery: null,
        payment: null,
        orderId: null
      })
      setPaymentFormValues(null)
    }
  }, [isCheckoutOpen, isClosingToCart])

  // Move to success step when API call succeeds
  useEffect(() => {
    if (isSuccess && data && data.orderId) {
      setFormData((prev) => ({
        ...prev,
        orderId: data.orderId
      }))
      setDirection('forward')
      setCurrentStep(CheckoutStep.SUCCESS)
    }
  }, [isSuccess, data])

  const handleCloseCheckout = () => {
    dispatch(closeCart())
  }

  const handleBackToCart = () => {
    setDirection('backward')
    setIsClosingToCart(true)

    // Close checkout and re-open cart with better timing
    setTimeout(() => {
      dispatch(closeCart())

      // Re-open cart after a brief delay to allow animations to complete
      setTimeout(() => {
        dispatch(openCart())
        setIsClosingToCart(false)
      }, 150)
    }, 300)
  }

  const handleDeliverySubmit = (values: DeliveryFormValues) => {
    setFormData((prev) => ({ ...prev, delivery: values }))
    setDirection('forward')
    setCurrentStep(CheckoutStep.PAYMENT)
  }

  const handlePaymentChange = (values: PaymentFormValues) => {
    // Update values when any field in the payment form changes
    setPaymentFormValues(values)
  }

  const handlePaymentSubmit = async (values: PaymentFormValues) => {
    if (!formData.delivery) {
      // Handle error - delivery data missing
      alert(
        'Dados de entrega não encontrados. Por favor, volte para a etapa anterior.'
      )
      setDirection('backward')
      setCurrentStep(CheckoutStep.DELIVERY)
      return
    }

    // Save payment form values for navigation
    setPaymentFormValues(values)

    setIsLoading(true)

    // Format data according to the API expectations
    const payload: CheckoutPayload = {
      products: items.map((item) => ({
        id: item.id,
        price: Number(item.preco)
      })),
      delivery: {
        receiver: formData.delivery.receiver,
        address: {
          description: formData.delivery.address,
          city: formData.delivery.city,
          zipCode: formData.delivery.zipCode,
          number: parseInt(formData.delivery.number) || 0,
          complement: formData.delivery.complement
        }
      },
      payment: {
        card: {
          name: values.cardName,
          number: values.cardNumber.replace(/\s/g, ''),
          code: parseInt(values.cardCode) || 0,
          expires: {
            month: parseInt(values.expirationMonth) || 0,
            year: parseInt(values.expirationYear) || 0
          }
        }
      }
    }

    try {
      await checkout(payload).unwrap()
      // Success handling is done in the useEffect
      setFormData((prev) => ({
        ...prev,
        payment: values
      }))
    } catch (error) {
      console.error('Checkout error:', error)

      // For demo purposes, show success screen even if API fails
      const mockOrderId = `DEMO-${Math.floor(Math.random() * 10000)
        .toString()
        .padStart(4, '0')}`

      setFormData((prev) => ({
        ...prev,
        payment: values,
        orderId: mockOrderId
      }))

      // Move to success when API fails (for demo)
      setDirection('forward')
      setCurrentStep(CheckoutStep.SUCCESS)
    } finally {
      setIsLoading(false)
    }
  }

  const handleBackToDelivery = () => {
    setDirection('backward')
    setCurrentStep(CheckoutStep.DELIVERY)
  }

  const handleFinish = () => {
    setDirection('backward')
    dispatch(clear())
    setTimeout(() => {
      handleCloseCheckout()
    }, 300)
  }

  if (!isCheckoutOpen) {
    return null
  }

  return (
    <S.CheckoutContainer>
      <S.CheckoutOverlay onClick={handleCloseCheckout} />
      <S.CheckoutContent>
        {isLoading ? (
          <S.LoaderContainer>
            <CircleLoader color="#ffffff" size={40} />
          </S.LoaderContainer>
        ) : (
          <>
            {currentStep === CheckoutStep.DELIVERY && (
              <S.StepContainer direction={direction}>
                <DeliveryForm
                  initialValues={formData.delivery}
                  onSubmit={handleDeliverySubmit}
                  onCancel={handleBackToCart}
                />
              </S.StepContainer>
            )}

            {currentStep === CheckoutStep.PAYMENT && (
              <S.StepContainer direction={direction}>
                <PaymentForm
                  initialValues={paymentFormValues || formData.payment}
                  onSubmit={handlePaymentSubmit}
                  onBack={handleBackToDelivery}
                  totalAmount={items.reduce((acc, item) => acc + item.preco, 0)}
                  onChange={handlePaymentChange}
                />
              </S.StepContainer>
            )}

            {currentStep === CheckoutStep.SUCCESS && formData.orderId && (
              <S.StepContainer direction={direction}>
                <OrderSuccess
                  orderId={formData.orderId}
                  onFinish={handleFinish}
                />
              </S.StepContainer>
            )}
          </>
        )}
      </S.CheckoutContent>
    </S.CheckoutContainer>
  )
}

export default Checkout
