import { useEffect } from 'react'
import { useReward } from 'react-rewards'
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { clear } from '../../store/reducers/cart'

import * as S from './styles'

interface OrderSuccessProps {
  orderId: string
  onFinish: () => void
}

const OrderSuccess = ({ orderId, onFinish }: OrderSuccessProps) => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const isDemo = orderId.startsWith('DEMO-')
  const { reward, isAnimating } = useReward(
    'orderSuccessConfetti',
    'confetti',
    {
      elementCount: 100,
      spread: 70,
      lifetime: 220,
      zIndex: 50,
      elementSize: 10
    }
  )

  useEffect(() => {
    // Trigger confetti animation when component mounts
    const timer = setTimeout(() => {
      reward()
    }, 300)

    return () => clearTimeout(timer)
  }, [reward])

  // Clear cart when OrderSuccess mounts
  useEffect(() => {
    dispatch(clear())
  }, [dispatch])

  const handleBackToHome = () => {
    dispatch(clear())
    onFinish()
    navigate('/')
  }

  return (
    <S.SuccessContainer>
      <S.Title>
        Pedido realizado com sucesso!
        <S.ConfettiWrapper>
          <span id="orderSuccessConfetti" />
        </S.ConfettiWrapper>
      </S.Title>

      <S.OrderInfo>
        <strong>Número do pedido:</strong> {orderId}
      </S.OrderInfo>

      {isDemo && (
        <S.OrderMessage
          style={{
            color: '${Colors.white}',
            backgroundColor: 'rgba(0,0,0,0.2)',
            padding: '8px',
            borderRadius: '4px',
            marginBottom: '16px'
          }}
        >
          ⚠️ Nota: Este é um pedido de demonstração. Em um ambiente real, seu
          pedido seria processado pelo servidor.
        </S.OrderMessage>
      )}

      <S.OrderMessage>
        Estamos felizes em informar que seu pedido já está em processo de
        preparação e, em breve, será entregue no endereço fornecido.
      </S.OrderMessage>

      <S.OrderMessage>
        Gostaríamos de ressaltar que nossos entregadores não estão autorizados a
        realizar cobranças extras.
      </S.OrderMessage>

      <S.OrderMessage>
        Lembre-se da importância de higienizar as mãos após o recebimento do
        pedido, garantindo assim sua segurança e bem-estar durante a refeição.
      </S.OrderMessage>

      <S.OrderMessage>
        Esperamos que desfrute de uma deliciosa e agradável experiência
        gastronômica. Bom apetite!
      </S.OrderMessage>

      <S.Button disabled={isAnimating} onClick={handleBackToHome}>
        Concluir
      </S.Button>
    </S.SuccessContainer>
  )
}

export default OrderSuccess
