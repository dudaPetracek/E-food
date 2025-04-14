import styled from 'styled-components'
import { Colors, breakpoints } from '../../styles'

export const Container = styled.div`
  position: relative;
  width: 100%;
  height: 384px;

  @media (max-width: ${breakpoints.tablet}) {
    height: 320px;
  }

  @media (max-width: ${breakpoints.mobile}) {
    height: 280px;
  }
`

export const Imagem = styled.div`
  width: 100%;
  height: 100%;
  background-size: cover;
  background-position: center;
  background: rgba(230, 103, 103, 0.05);
`

export const Logo = styled.img`
  position: absolute;
  width: 125px;
  height: 57.5px;
  left: 50%;
  transform: translateX(-50%);
  margin-top: 40px;
  background: ${Colors.mainPink};

  @media (max-width: ${breakpoints.mobile}) {
    width: 100px;
    height: 46px;
    margin-top: 30px;
  }
`

export const Titulo = styled.h1`
  position: absolute;
  max-width: 539px;
  width: 90%;
  height: auto;
  left: 50%;
  transform: translateX(-50%);
  top: 236px;

  font-family: 'Roboto';
  font-style: normal;
  font-weight: 900;
  font-size: 36px;
  line-height: 42px;
  text-align: center;
  color: ${Colors.mainPink};

  @media (max-width: ${breakpoints.tablet}) {
    top: 200px;
    font-size: 32px;
    line-height: 38px;
  }

  @media (max-width: ${breakpoints.mobile}) {
    top: 170px;
    font-size: 28px;
    line-height: 34px;
  }
`
