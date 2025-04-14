import styled from 'styled-components'
import { Colors, breakpoints } from '../../styles'
import { Card } from '../Product/styles'

export const Container = styled.section`
  background-color: ${Colors.background};
  padding: 80px 0;
  padding-bottom: 120px;
  width: 100%;
`

export const List = styled.ul`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 48px;
  list-style: none;
  padding: 0;
  max-width: 1024px;
  margin: 0 auto;

  @media (max-width: ${breakpoints.desktop}) {
    max-width: 90%;
    justify-content: center;
    align-items: stretch;
  }

  @media (max-width: ${breakpoints.tablet}) {
    grid-template-columns: 1fr 1fr;
    gap: 24px;
  }

  @media (max-width: ${breakpoints.mobile}) {
    grid-template-columns: 1fr;
    gap: 16px;
    max-width: 95%;
  }

  ${Card} {
    width: 100%;
    height: 100%;
    max-width: 472px;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
  }
`

export const Title = styled.h2`
  font-size: 36px;
  font-weight: bold;
  text-align: center;
  color: ${Colors.mainPink};
  margin: 0 0 40px 0;

  @media (max-width: ${breakpoints.mobile}) {
    font-size: 28px;
    margin: 0 0 24px 0;
  }
`
