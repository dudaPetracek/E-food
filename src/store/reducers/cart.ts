import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { MenuItem } from '../../models/Menu'

type CartState = {
  items: MenuItem[]
  isOpen: boolean
  isCheckoutOpen: boolean
}

const initialState: CartState = {
  items: [],
  isOpen: false,
  isCheckoutOpen: false
}

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addItem: (state, action: PayloadAction<MenuItem>) => {
      state.items.push(action.payload)
    },
    removeItem: (state, action: PayloadAction<number>) => {
      state.items = state.items.filter((item) => item.id !== action.payload)
    },
    closeCart: (state) => {
      state.isOpen = false
      state.isCheckoutOpen = false
    },
    openCart: (state) => {
      state.isOpen = true
      state.isCheckoutOpen = false
    },
    openCheckout: (state) => {
      state.isOpen = true
      state.isCheckoutOpen = true
    },
    clear: (state) => {
      state.items = []
    }
  },
  extraReducers: (builder) => {
    // Handle the clearCart action if it's still being used elsewhere
    builder.addCase('cart/clearCart', (state) => {
      state.items = []
    })
  }
})

export const { addItem, removeItem, closeCart, openCart, openCheckout, clear } =
  cartSlice.actions

export const getTotalPrice = (items: MenuItem[]) => {
  return items
    .reduce((total, item) => total + parseFloat(item.preco.toString()), 0)
    .toFixed(2)
}

// Keep this export for backward compatibility
export const clearCart = { type: 'cart/clearCart' }

export default cartSlice.reducer
