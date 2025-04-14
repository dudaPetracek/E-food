import styled from 'styled-components'
import { Colors, breakpoints } from '../../styles'

export const Card = styled.div`
  background-color: ${Colors.mainPink};
  padding: 8px;
  width: 100%;
  display: flex;
  flex-direction: column;
  height: 100%;
  border-radius: 8px;

  @media (max-width: ${breakpoints.tablet}) {
    padding: 8px;
  }
`

export const ImageContainer = styled.div`
  position: relative;
  width: 100%;
  height: 167px;
  border-radius: 8px;
  overflow: hidden;
  background-color: rgba(230, 103, 103, 0.1);

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 8px;
    transition: opacity 0.3s ease;
  }

  @media (max-width: ${breakpoints.mobile}) {
    height: 150px;
  }
`

export const ErrorPlaceholder = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgba(230, 103, 103, 0.2);
  color: ${Colors.lightPink};
  font-size: 14px;
  text-align: center;
  padding: 0 8px;

  span {
    background-color: rgba(0, 0, 0, 0.3);
    padding: 4px 8px;
    border-radius: 4px;
  }
`

export const LoaderWrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgba(230, 103, 103, 0.1);
`

export const Title = styled.h3`
  font-size: 16px;
  font-weight: 900;
  color: ${Colors.lightPink};
  margin: 8px 0;
`

export const Description = styled.p`
  font-size: 14px;
  line-height: 22px;
  color: ${Colors.lightPink};
  margin-bottom: 8px;
  flex-grow: 1;

  @media (max-width: ${breakpoints.mobile}) {
    font-size: 13px;
    line-height: 20px;
  }
`

export const Button = styled.button`
  width: 100%;
  background-color: ${Colors.lightPink};
  color: ${Colors.mainPink};
  font-weight: 700;
  font-size: 14px;
  padding: 4px 0;
  border: none;
  margin-top: auto;
  cursor: pointer;
  transition: all 0.2s ease;

  &:hover {
    background-color: ${Colors.white};
    color: ${Colors.mainPink};
  }
`
