import styled, { keyframes } from 'styled-components'
import { Colors, breakpoints } from '../../styles'

const slideInLeft = keyframes`
  from {
    transform: translateX(100%);
    opacity: 0;
  }
  to {
    transform: translateX(0);
    opacity: 1;
  }
`

const slideInRight = keyframes`
  from {
    transform: translateX(-100%);
    opacity: 0;
  }
  to {
    transform: translateX(0);
    opacity: 1;
  }
`

export const CheckoutContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: flex-end;
  z-index: 990;
  transform: translateZ(0);
  backface-visibility: hidden;
  perspective: 1000px;
  will-change: transform;
  contain: layout;
`

export const CheckoutOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 1;
`

export const CheckoutContent = styled.div`
  background-color: ${Colors.mainPink};
  width: 360px;
  padding: 32px 8px;
  overflow-y: auto;
  position: relative;
  z-index: 999;
  will-change: transform;
  backface-visibility: hidden;
  isolation: isolate;
  box-shadow: -5px 0 15px rgba(0, 0, 0, 0.1);
  contain: content;

  @media (max-width: ${breakpoints.mobile}) {
    width: 80%;
  }
`

export const FormContainer = styled.div`
  position: relative;
  width: 100%;
`

export const SuccessContainer = styled.div`
  position: relative;
  width: 100%;
  overflow-x: hidden;
`

export const ConfettiWrapper = styled.div`
  position: absolute;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  z-index: 10;
  width: 10px;
  height: 10px;
  pointer-events: none;
`

export const StepContainer = styled.div<{ direction: 'forward' | 'backward' }>`
  animation: ${(props) =>
      props.direction === 'forward' ? slideInLeft : slideInRight}
    0.4s ease forwards;
  will-change: transform, opacity;
  backface-visibility: hidden;
  position: relative;
  transform-style: preserve-3d;
  contain: content;
`

export const BackButton = styled.button`
  background: none;
  border: none;
  color: ${Colors.lightPink};
  font-size: 14px;
  margin-bottom: 16px;
  cursor: pointer;
  display: flex;
  align-items: center;
  padding: 0;
  animation: ${slideInRight} 0.4s ease forwards;

  &:before {
    content: '←';
    margin-right: 8px;
  }

  &:hover {
    text-decoration: underline;
  }
`

export const CloseButton = styled.button`
  position: absolute;
  top: 8px;
  right: 8px;
  background: none;
  border: none;
  cursor: pointer;
  z-index: 2;
  transition: transform 0.2s ease;

  &:hover {
    transform: scale(1.1);
  }

  img {
    width: 16px;
    height: 16px;
  }
`

export const Title = styled.h2`
  font-size: 18px;
  color: ${Colors.lightPink};
  font-weight: bold;
  margin-bottom: 16px;
  position: relative;
  padding-top: 8px;
`

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 8px;
`

export const InputGroup = styled.div`
  margin-bottom: 8px;
`

export const Label = styled.label`
  color: ${Colors.lightPink};
  font-size: 14px;
  font-weight: bold;
  margin-bottom: 8px;
  display: block;
`

export const Input = styled.input<{ isValid?: boolean }>`
  width: 100%;
  height: 32px;
  background-color: ${Colors.lightPink};
  border: none;
  padding: 0 8px;
  font-size: 14px;
  color: ${Colors.black};
  outline: none;

  &:focus {
    outline: ${(props) => (!props.isValid ? '2px solid red' : 'none')};
  }

  &.error {
    outline: 4px solid red;
  }
`

export const InputRow = styled.div`
  display: flex;
  gap: 16px;

  > div {
    flex: 1;
  }
`

export const Button = styled.button`
  background-color: ${Colors.lightPink};
  color: ${Colors.mainPink};
  border: none;
  width: 100%;
  padding: 4px;
  text-align: center;
  font-weight: 700;
  cursor: pointer;
  margin-top: 8px;
  font-size: 14px;
  transition: all 0.2s ease;

  &:hover {
    background-color: ${Colors.white};
  }
`

export const ErrorMessage = styled.p`
  color: ${Colors.warning};
  font-size: 12px;
  margin-top: 4px;
`

export const OrderInfo = styled.div`
  color: ${Colors.lightPink};
  margin-bottom: 16px;
  padding: 12px;
  background-color: rgba(255, 255, 255, 0.1);
  border-radius: 4px;
  font-size: 16px;

  strong {
    font-weight: bold;
  }
`

export const OrderAmount = styled.p`
  color: ${Colors.lightPink};
  font-size: 14px;
  font-weight: bold;
  margin-top: 16px;
`

export const OrderMessage = styled.p`
  color: ${Colors.lightPink};
  font-size: 14px;
  line-height: 22px;
  margin: 16px 0;
`

export const LoaderContainer = styled.div`
  display: flex;
  justify-content: center;
  margin: 16px 0;
`
