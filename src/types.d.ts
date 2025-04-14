declare interface DeliveryFormValues {
  receiver: string
  address: string
  city: string
  zipCode: string
  number: string
  complement?: string
}

declare interface PaymentFormValues {
  cardName: string
  cardNumber: string
  cardCode: string
  expirationMonth: string
  expirationYear: string
}

declare interface CheckoutPayload {
  products: {
    id: number
    price: number
  }[]
  delivery: {
    receiver: string
    address: {
      description: string
      city: string
      zipCode: string
      number: number
      complement?: string
    }
  }
  payment: {
    card: {
      name: string
      number: string
      code: number
      expires: {
        month: number
        year: number
      }
    }
  }
}

declare interface CheckoutResponse {
  orderId: string
}
