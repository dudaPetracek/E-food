import styled from 'styled-components'
import { Colors } from '../../styles'
import bannerBackground from '../../assets/images/banner.png'

export const HeaderBar = styled.header`
  height: 186px;
  background-image: url(${bannerBackground});
  background-size: cover;
  background-color: rgba(230, 103, 103, 0.05);
`

export const HeaderContent = styled.div`
  max-width: 1024px;
  margin: 0 auto;
  padding-top: 40px;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  align-items: center;
  position: relative;

  > a:nth-child(2) {
    justify-self: center;
  }

  > span:last-child {
    justify-self: end;
  }
`

export const RestaurantsButton = styled.button`
  font-weight: 900;
  font-size: 18px;
  color: ${Colors.mainPink};
  background: none;
  border: none;
  cursor: pointer;
  padding: 0;
  margin-right: auto;

  &:hover {
    text-decoration: none;
  }
`

export const CartText = styled.span`
  font-weight: 900;
  font-size: 18px;
  color: ${Colors.mainPink};
  text-align: right;
  display: flex;
  align-items: center;
  gap: 8px;

  img {
    width: 24px;
    height: 24px;
  }
`
