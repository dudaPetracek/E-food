import styled from 'styled-components'
import { Colors, breakpoints } from '../../styles'

export const HeroContainer = styled.div`
  width: 100%;
  height: 280px;
  position: relative;
  background-color: rgba(0, 0, 0, 0.5);

  @media (max-width: ${breakpoints.tablet}) {
    height: 240px;
  }

  @media (max-width: ${breakpoints.mobile}) {
    height: 200px;
  }
`

export const HeroBackground = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  background-size: cover;
  background-position: center;
  z-index: -1;
`

export const HeroContent = styled.div`
  max-width: 1024px;
  margin: 0 auto;
  padding: 25px 16px;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  @media (max-width: ${breakpoints.desktop}) {
    max-width: 90%;
    padding: 20px 16px;
  }

  @media (max-width: ${breakpoints.mobile}) {
    padding: 16px;
  }
`

export const RestaurantType = styled.h2`
  font-size: 32px;
  color: ${Colors.white};
  margin: 0;

  &.restaurant-type {
    font-weight: 100;
  }

  @media (max-width: ${breakpoints.tablet}) {
    font-size: 28px;
  }

  @media (max-width: ${breakpoints.mobile}) {
    font-size: 24px;
  }
`

export const RestaurantName = styled.h1`
  font-size: 32px;
  font-weight: 900;
  color: ${Colors.white};
  margin: 0;

  @media (max-width: ${breakpoints.tablet}) {
    font-size: 28px;
  }

  @media (max-width: ${breakpoints.mobile}) {
    font-size: 24px;
  }
`
