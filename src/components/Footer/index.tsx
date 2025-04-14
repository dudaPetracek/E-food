import * as S from './styles'
import logo from '../../assets/images/logo.svg'
import instagram from '../../assets/images/instagram.png'
import facebook from '../../assets/images/facebook.png'
import twitter from '../../assets/images/twitter.png'
import { Link } from 'react-router-dom'

const Footer = () => (
  <S.Container>
    <div className="container">
      <S.Logo>
        <Link to="/">
          <img src={logo} alt="E-food" />
        </Link>
      </S.Logo>
      <S.SocialLinks>
        <S.SocialIcon href="#" title="Instagram">
          <img src={instagram} alt="Instagram" />
        </S.SocialIcon>
        <S.SocialIcon href="#" title="Facebook">
          <img src={facebook} alt="Facebook" />
        </S.SocialIcon>
        <S.SocialIcon href="#" title="Twitter">
          <img src={twitter} alt="Twitter" />
        </S.SocialIcon>
      </S.SocialLinks>
      <S.FooterText>
        A efood é uma plataforma para divulgação de estabelecimentos, a
        responsabilidade pela entrega, qualidade dos produtos é toda do
        estabelecimento contratado.
      </S.FooterText>
    </div>
  </S.Container>
)

export default Footer
