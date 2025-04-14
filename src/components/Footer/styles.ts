import styled from 'styled-components'
import { Colors } from '../../styles'

export const Container = styled.footer`
  background-color: ${Colors.lightPink};
  height: 298px;
  padding: 40px 0;
  position: relative;
`

export const Logo = styled.div`
  width: 125px;
  height: 57.5px;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;

  img {
    max-width: 100%;
    max-height: 100%;
    object-fit: contain;
  }
`

export const SocialLinks = styled.div`
  display: flex;
  justify-content: center;
  gap: 8px;
  margin: 32.5px 0 80px;
`

export const SocialIcon = styled.a`
  width: 24px;
  height: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${Colors.mainPink};

  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
`

export const FooterText = styled.p`
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 400;
  font-size: 10px;
  line-height: 12px;
  text-align: center;
  color: ${Colors.mainPink};
  max-width: 480px;
  margin: 0 auto;
`
