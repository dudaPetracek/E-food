import { useState, useEffect } from 'react'
import { CircleLoader } from 'react-spinners'

import Banner from '../../components/Banner'
import ProductsList from '../../components/ProductsList'
import { Restaurant } from '../../models/Menu'

const Home = () => {
  const [restaurants, setRestaurants] = useState<Restaurant[]>([])
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    setIsLoading(true)
    fetch('https://fake-api-tau.vercel.app/api/efood/restaurantes')
      .then((res) => res.json())
      .then((res) => {
        setRestaurants(res)
        setIsLoading(false)
      })
      .catch((err) => {
        console.error('Error fetching restaurants:', err)
        setIsLoading(false)
      })
  }, [])

  const parsedRestaurants = restaurants.map((restaurant) => ({
    id: restaurant.id,
    title: restaurant.titulo,
    isHighlight: restaurant.destacado,
    category: restaurant.tipo,
    description: restaurant.descricao,
    image: restaurant.capa,
    rating: restaurant.avaliacao,
    tipo: restaurant.tipo
  }))

  return (
    <>
      <Banner />
      {isLoading ? (
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            width: '100%',
            padding: '40px'
          }}
        >
          <CircleLoader color="#E66767" size={40} />
        </div>
      ) : (
        <ProductsList menus={parsedRestaurants} title="" />
      )}
    </>
  )
}

export default Home
