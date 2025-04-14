import { useState, useEffect, useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '../../store'
import {
  closeCart,
  removeItem,
  getTotalPrice,
  openCheckout
} from '../../store/reducers/cart'
import trashIcon from '../../assets/images/lixeira.png'
import closeIcon from '../../assets/images/close.png'
import * as S from './styles'

const Cart = () => {
  const { isOpen, items } = useSelector((state: RootState) => state.cart)
  const [animate, setAnimate] = useState(false)
  const [isVisible, setIsVisible] = useState(false)
  const [removingItems, setRemovingItems] = useState<Record<number, boolean>>(
    {}
  )
  const dispatch = useDispatch()
  const animationTimeoutRef = useRef<NodeJS.Timeout | null>(null)

  // Handle cart visibility and animation
  useEffect(() => {
    if (isOpen) {
      // Cart opened - show immediately and animate in
      setIsVisible(true)
      document.body.style.overflow = 'hidden'

      // Start animation in next frame for smooth transition
      const timer = setTimeout(() => {
        setAnimate(true)
      }, 10)

      return () => clearTimeout(timer)
    } else {
      // Cart closed - animate out but don't hide yet
      setAnimate(false)
      document.body.style.overflow = ''

      // Hide after animation completes
      if (isVisible) {
        animationTimeoutRef.current = setTimeout(() => {
          setIsVisible(false)
        }, 300)

        return () => {
          if (animationTimeoutRef.current) {
            clearTimeout(animationTimeoutRef.current)
          }
        }
      }
    }
  }, [isOpen, isVisible])

  const handleCloseCart = () => {
    // Just dispatch close - the effect will handle animation
    dispatch(closeCart())
  }

  const handleRemoveItem = (id: number) => {
    setRemovingItems((prev) => ({ ...prev, [id]: true }))
    setTimeout(() => {
      dispatch(removeItem(id))
      setRemovingItems((prev) => ({ ...prev, [id]: false }))
    }, 500)
  }

  const handleCheckout = () => {
    dispatch(openCheckout())
  }

  // Only render if cart should be visible
  if (!isVisible) {
    return null
  }

  return (
    <S.CartContainer animate={animate}>
      <S.CartOverlay onClick={handleCloseCart} animate={animate} />
      <S.CartContent animate={animate}>
        <S.CloseButton onClick={handleCloseCart}>
          <img src={closeIcon} alt="Fechar" />
        </S.CloseButton>

        {items.length === 0 ? (
          <S.EmptyCart>Carrinho vazio</S.EmptyCart>
        ) : (
          <>
            {items.map((item) => (
              <S.CartItem key={item.id} removing={removingItems[item.id]}>
                <S.CartItemContent>
                  <S.ItemImage src={item.foto} alt={item.nome} />
                  <S.ItemInfo>
                    <S.ItemTitle>{item.nome}</S.ItemTitle>
                    <S.ItemPrice>R$ {item.preco.toFixed(2)}</S.ItemPrice>
                  </S.ItemInfo>
                </S.CartItemContent>
                <S.RemoveButton
                  onClick={() => handleRemoveItem(item.id)}
                  aria-label="Remover item"
                >
                  <img src={trashIcon} alt="Remover item" />
                </S.RemoveButton>
              </S.CartItem>
            ))}

            <S.CartTotal>
              <span>Valor total</span>
              <span>R$ {getTotalPrice(items)}</span>
            </S.CartTotal>

            <S.CheckoutButton onClick={handleCheckout}>
              Continuar com a entrega
            </S.CheckoutButton>
          </>
        )}
      </S.CartContent>
    </S.CartContainer>
  )
}

export default Cart
