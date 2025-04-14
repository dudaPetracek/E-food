import * as S from './styles'
import heroBackground from '../../assets/images/pastaFundoPerfil.png'

type Props = {
  type: string
  name: string
  image: string
}

const RestaurantHero = ({ type, name }: Props) => {
  return (
    <S.HeroContainer>
      <S.HeroBackground style={{ backgroundImage: `url(${heroBackground})` }} />
      <S.HeroContent>
        <S.RestaurantType>{type}</S.RestaurantType>
        <S.RestaurantName>{name}</S.RestaurantName>
      </S.HeroContent>
    </S.HeroContainer>
  )
}

export default RestaurantHero
