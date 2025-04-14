import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'

import { RootState } from '../../store'
import { openCart } from '../../store/reducers/cart'
import logo from '../../assets/images/logo.svg'
import * as S from './styles'

const Header = () => {
  const { items } = useSelector((state: RootState) => state.cart)
  const dispatch = useDispatch()

  const handleCartClick = (e: React.MouseEvent) => {
    e.preventDefault()
    dispatch(openCart())
  }

  return (
    <S.HeaderBar>
      <S.HeaderContent>
        <S.Links>
          <S.LinkItem>
            <Link to="/">Restaurantes</Link>
          </S.LinkItem>
        </S.Links>
        <S.LogoContainer>
          <Link to="/">
            <img className="logo" src={logo} alt="Logo" />
          </Link>
        </S.LogoContainer>
        <S.LinkCart href="#" onClick={handleCartClick}>
          {items.length} produto(s) no carrinho
        </S.LinkCart>
      </S.HeaderContent>
    </S.HeaderBar>
  )
}

export default Header
