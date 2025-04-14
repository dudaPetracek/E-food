import * as S from './styles'
import LogoImg from '../../assets/images/logo.png'
import bannerImg from '../../assets/images/banner.png'

const Banner = () => (
  <S.Container>
    <S.Imagem style={{ backgroundImage: `url(${bannerImg})` }}>
      <S.Logo src={LogoImg} alt="efood" />
      <S.Titulo>
        Viva experiências gastronômicas no conforto da sua casa
      </S.Titulo>
    </S.Imagem>
  </S.Container>
)

export default Banner
