import { useState, useEffect } from 'react'
import { CircleLoader } from 'react-spinners'

import * as S from './styles'

type Props = {
  title: string
  description: string
  image: string
  onClick: () => void
}

const MenuItem = ({ title, description, image, onClick }: Props) => {
  const [imageLoading, setImageLoading] = useState(true)
  const [imageError, setImageError] = useState(false)

  // Reset loading state when image prop changes
  useEffect(() => {
    setImageLoading(true)
    setImageError(false)

    // Preload image
    const img = new Image()
    img.src = image
    img.onload = () => setImageLoading(false)
    img.onerror = () => {
      setImageLoading(false)
      setImageError(true)
    }

    return () => {
      img.onload = null
      img.onerror = null
    }
  }, [image])

  return (
    <S.Card>
      <S.ImageContainer>
        {imageLoading && (
          <S.LoaderWrapper data-testid="image-loader">
            <CircleLoader color="#E66767" size={40} />
          </S.LoaderWrapper>
        )}
        {imageError ? (
          <S.ErrorPlaceholder>
            <span>Imagem não disponível</span>
          </S.ErrorPlaceholder>
        ) : (
          <img
            src={image}
            alt={title}
            style={{
              display: imageLoading ? 'none' : 'block',
              opacity: imageLoading ? 0 : 1,
              transition: 'opacity 0.3s ease-in'
            }}
          />
        )}
      </S.ImageContainer>
      <S.Title>{title}</S.Title>
      <S.Description>{description}</S.Description>
      <S.Button onClick={onClick}>Mais detalhes</S.Button>
    </S.Card>
  )
}

export default MenuItem
