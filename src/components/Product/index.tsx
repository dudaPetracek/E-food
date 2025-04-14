import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { CircleLoader } from 'react-spinners'

import Tag from '../Tag'
import Button from '../Button'
import * as S from './styles'

type Props = {
  title: string
  category: string
  description: string
  image: string
  rating: number
  isHighlight?: boolean
  tipo: string
}

const Product = ({
  title,
  category,
  description,
  image,
  rating,
  isHighlight,
  tipo
}: Props) => {
  const navigate = useNavigate()
  const [imageLoading, setImageLoading] = useState(true)
  const [imageError, setImageError] = useState(false)

  useEffect(() => {
    setImageLoading(true)
    setImageError(false)

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
          <S.LoaderWrapper>
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
              opacity: imageLoading ? 0 : 1,
              transition: 'opacity 0.3s ease'
            }}
          />
        )}
      </S.ImageContainer>
      <S.Infos>
        {isHighlight && <Tag>Destaque da semana</Tag>}
        <Tag>{category}</Tag>
      </S.Infos>
      <S.Titulo>
        {title}
        <span>{rating.toFixed(1)}</span>
      </S.Titulo>
      <S.Descricao>{description}</S.Descricao>
      <Button
        type="button"
        title="Saiba mais"
        variant="secondary"
        onClick={() => navigate(`/restaurant/${tipo}`)}
      >
        Saiba mais
      </Button>
    </S.Card>
  )
}

export default Product
