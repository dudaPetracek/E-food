import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { CircleLoader } from 'react-spinners'

import RestaurantHero from '../../components/RestaurantHero'
import MenuList from '../../components/MenuList'
import Modal from '../../components/Modal'
import Cart from '../../components/Cart'
import Checkout from '../../components/Checkout'
import Header from '../../components/Header'
import { MenuItem, Restaurant } from '../../models/Menu'

const capitalize = (str: string) => {
  return str.charAt(0).toUpperCase() + str.slice(1)
}

const RestaurantDetails = () => {
  const { tipo } = useParams<{ tipo: string }>()
  const [restaurant, setRestaurant] = useState<Restaurant>()
  const [selectedItem, setSelectedItem] = useState<MenuItem | null>(null)
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    setIsLoading(true)
    fetch('https://fake-api-tau.vercel.app/api/efood/restaurantes')
      .then((res) => res.json())
      .then((res) => {
        const foundRestaurant = res.find((r: Restaurant) => r.tipo === tipo)
        setRestaurant(foundRestaurant)
        setIsLoading(false)
      })
      .catch((err) => {
        console.error('Error fetching restaurant:', err)
        setIsLoading(false)
      })
  }, [tipo])

  const handleOpenModal = (item: MenuItem) => {
    setSelectedItem(item)
    setIsModalOpen(true)
  }

  const handleCloseModal = () => {
    setIsModalOpen(false)
    setSelectedItem(null)
  }

  return (
    <>
      <Header />
      {isLoading ? (
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            width: '100%',
            padding: '80px'
          }}
        >
          <CircleLoader
            color="#E66767"
            size={60}
            loading={isLoading}
            speedMultiplier={0.8}
          />
        </div>
      ) : restaurant ? (
        <>
          <RestaurantHero
            type={capitalize(restaurant.tipo)}
            name={restaurant.titulo}
            image={restaurant.capa}
          />
          <MenuList items={restaurant.cardapio} onItemClick={handleOpenModal} />
        </>
      ) : (
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            width: '100%',
            padding: '40px'
          }}
        >
          Restaurante não encontrado
        </div>
      )}
      <Cart />
      <Checkout />

      {selectedItem && (
        <Modal
          menuItem={selectedItem}
          isOpen={isModalOpen}
          onClose={handleCloseModal}
        />
      )}
    </>
  )
}

export default RestaurantDetails
