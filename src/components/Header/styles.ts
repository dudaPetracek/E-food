import styled from 'styled-components'
import { Colors, breakpoints } from '../../styles'
import backgroundVector from '../../assets/images/backgroundVector.png'

export const HeaderBar = styled.header`
  background: ${Colors.headerBackground};
  height: 186px;
  width: 100%;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  background-image: url(${backgroundVector});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;

  @media (max-width: ${breakpoints.tablet}) {
    height: 140px;
  }

  @media (max-width: ${breakpoints.mobile}) {
    height: 120px;
  }
`

export const HeaderContent = styled.div`
  width: 100%;
  max-width: ${breakpoints.desktop};
  position: relative;
  height: 100%;
  padding: 0 16px;

  @media (max-width: ${breakpoints.desktop}) {
    max-width: 100%;
  }

  @media (max-width: ${breakpoints.tablet}) {
    max-width: 100%;
  }
`

export const Links = styled.ul`
  display: flex;
  position: absolute;
  left: 16px;
  top: 50%;
  transform: translateY(-50%);

  @media (max-width: ${breakpoints.desktop}) {
    left: 16px;
  }

  @media (max-width: ${breakpoints.mobile}) {
    display: none;
  }
`

export const LinkItem = styled.li`
  a {
    font-weight: 900;
    font-size: 18px;
    line-height: 21px;
    text-align: left;
    color: ${Colors.mainPink};
    text-decoration: none;

    @media (max-width: ${breakpoints.tablet}) {
      font-size: 16px;
    }
  }
`

export const LinkCart = styled.a`
  position: absolute;
  right: 16px;
  text-align: right;
  top: 50%;
  transform: translateY(-50%);
  font-weight: 900;
  font-size: 18px;
  line-height: 21px;
  color: ${Colors.mainPink};
  text-decoration: none;
  white-space: nowrap;

  @media (max-width: ${breakpoints.tablet}) {
    font-size: 16px;
  }

  @media (max-width: ${breakpoints.mobile}) {
    right: 5%;
    font-size: 14px;
  }
`

export const LogoContainer = styled.div`
  position: absolute;
  width: 125px;
  height: 57.5px;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  background: ${Colors.mainPink};

  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }

  @media (max-width: ${breakpoints.tablet}) {
    width: 100px;
    height: 46px;
  }

  @media (max-width: ${breakpoints.mobile}) {
    width: 90px;
    height: 41px;
    left: 5%;
    transform: translateY(-50%);
  }
`
