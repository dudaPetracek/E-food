import { Link } from 'react-router-dom'

import logo from '../../assets/images/logo.svg'
import * as S from './styles'

const RestaurantHeader = () => (
  <S.HeaderBar>
    <S.HeaderContent>
      <Link to="/">
        <S.RestaurantsButton>Restaurantes</S.RestaurantsButton>
      </Link>
      <Link to="/">
        <img src={logo} alt="efood" />
      </Link>
      <S.CartText>0 produto(s) no carrinho</S.CartText>
    </S.HeaderContent>
  </S.HeaderBar>
)

export default RestaurantHeader
