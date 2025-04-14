import * as S from './styles'

type Props = {
  type: string
  name: string
  image: string
}

const Hero = ({ type, name, image }: Props) => {
  return (
    <S.HeroContainer>
      <S.HeroBackground style={{ backgroundImage: `url(${image})` }} />
      <S.HeroContent>
        <S.RestaurantType>{type}</S.RestaurantType>
        <S.RestaurantName>{name}</S.RestaurantName>
      </S.HeroContent>
    </S.HeroContainer>
  )
}

export default Hero
