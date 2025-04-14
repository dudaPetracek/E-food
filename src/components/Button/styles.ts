import styled from 'styled-components'
import { Link } from 'react-router-dom'

import { Colors } from '../../styles'

export const ButtonContainer = styled.button<{
  variant?: 'primary' | 'secondary'
}>`
  ${(props) =>
    props.variant === 'primary'
      ? `
    width: calc(100% - 38px);
    margin: 8px 8px;
    margin-top: 16px;
    padding: 4px 0;
    border: none;
    background-color: ${Colors.mainPink};
    color: ${Colors.lightPink};
    font-weight: bold;
    font-size: 14px;
    cursor: pointer;
    border-radius: 4px;
    transition: all 0.2s ease;
    
    &:hover {
      transform: translateY(-2px);
      box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    }
    
    &:active {
      transform: translateY(0);
      box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    }
  `
      : `
    width: 82px;
    height: 24px;
    border: 2px solid ${Colors.mainPink};
    color: ${Colors.lightPink};
    background-color: ${Colors.mainPink};
    margin: 8px 8px;
    font-size: 12px;
    font-weight: bold;
    border-radius: 1px;
    cursor: pointer;
    transition: all 0.2s ease;
    
    &:hover {
      transform: translateY(-1px);
      box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    }
    
    &:active {
      transform: translateY(0);
      box-shadow: 0 1px 2px rgba(0, 0, 0, 0.1);
    }
  `}
`

export const ButtonLink = styled(Link)`
  border: 2px solid ${Colors.mainPink};
  color: ${Colors.lightPink};
  background-color: transparent;
  font-size: 16px;
  font-weight: bold;
  padding: 8px 8px;
  text-decoration: none;
  border-radius: 8px;
  display: inline-block;
  transition: all 0.2s ease;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    background-color: ${Colors.mainPink};
  }

  &:active {
    transform: translateY(0);
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  }
`
