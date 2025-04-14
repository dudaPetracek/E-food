import styled from 'styled-components'
import { Colors, breakpoints } from '../../styles'

type AnimatedProps = {
  animate: boolean
}

export const Container = styled.div<AnimatedProps>`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgba(0, 0, 0, ${({ animate }) => (animate ? '0.8' : '0')});
  z-index: 970;
  opacity: ${({ animate }) => (animate ? 1 : 0)};
  transition: background-color 0.3s ease, opacity 0.3s ease;
`

export const ModalContent = styled.div<AnimatedProps>`
  background-color: ${Colors.mainPink};
  padding: 32px;
  border-radius: 8px;
  position: relative;
  width: 100%;
  max-width: 1024px;
  display: flex;
  gap: 24px;
  transform: ${({ animate }) => (animate ? 'scale(1)' : 'scale(0.9)')};
  opacity: ${({ animate }) => (animate ? 1 : 0)};
  transition: transform 0.3s ease, opacity 0.3s ease;

  @media (max-width: ${breakpoints.desktop}) {
    max-width: 80%;
  }

  @media (max-width: ${breakpoints.tablet}) {
    flex-direction: column;
    align-items: center;
    padding: 24px;
  }

  @media (max-width: ${breakpoints.mobile}) {
    padding: 16px;
    max-width: 90%;
  }
`

export const ImageContainer = styled.div`
  position: relative;
  width: 280px;
  height: 280px;
  border-radius: 4px;
  overflow: hidden;

  @media (max-width: ${breakpoints.tablet}) {
    width: 100%;
    max-width: 280px;
    margin-bottom: 16px;
  }
`

export const LoaderWrapper = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 1;
  display: flex;
  align-items: center;
  justify-content: center;
`

export const ModalImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 4px;
  transition: opacity 0.3s ease;
`

export const ProductInfo = styled.div`
  flex: 1;
  color: ${Colors.white};

  h2 {
    font-size: 18px;
    font-weight: bold;
    margin-bottom: 16px;
  }

  p {
    font-size: 14px;
    line-height: 22px;
    margin-bottom: 16px;
  }

  button {
    background-color: ${Colors.lightPink};
    color: ${Colors.mainPink};
    border: none;
    padding: 8px 16px;
    border-radius: 4px;
    font-weight: bold;
    font-size: 14px;
    cursor: pointer;
    transition: all 0.2s ease;
    width: auto;

    @media (max-width: ${breakpoints.tablet}) {
      width: 100%;
    }

    &:hover {
      background-color: ${Colors.white};
    }
  }

  @media (max-width: ${breakpoints.tablet}) {
    width: 100%;
    text-align: center;
  }
`

export const CloseButton = styled.button`
  position: absolute;
  top: 8px;
  right: 8px;
  background: none;
  border: none;
  font-size: 24px;
  color: ${Colors.white};
  cursor: pointer;
  padding: 4px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.2s ease;

  &:hover {
    transform: scale(1.1);
  }
`

export const ErrorMessage = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgba(0, 0, 0, 0.1);
  color: ${Colors.white};
  font-size: 14px;
  text-align: center;
  padding: 16px;
`
