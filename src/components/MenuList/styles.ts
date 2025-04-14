import styled from 'styled-components'
import { Colors, breakpoints } from '../../styles'

export const Container = styled.div`
  background-color: ${Colors.background};
  padding-top: 56px;
  padding-bottom: 120px;
  width: 100%;
`

export const List = styled.div`
  max-width: 1024px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 32px;

  @media (max-width: ${breakpoints.desktop}) {
    max-width: 90%;
    grid-template-columns: repeat(3, 1fr);
    justify-content: center;
  }

  @media (max-width: ${breakpoints.tablet}) {
    grid-template-columns: repeat(2, 1fr);
    gap: 24px;
  }

  @media (max-width: ${breakpoints.mobile}) {
    grid-template-columns: 1fr;
    gap: 16px;
    max-width: 95%;
  }
`
