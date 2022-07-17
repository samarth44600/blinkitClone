import { createSlice, PayloadAction } from "@reduxjs/toolkit";
interface ICartState {
    cart: number[];
}
const cartSlice = createSlice({
    name: 'cartAdder',
    initialState: {
        cart: []

    },
    reducers: {

        addToCart: (state: ICartState, action: PayloadAction<number>) => {
            state.cart.includes(action.payload) ? state.cart.splice(state.cart.findIndex(i => i === action.payload), 1) : state.cart.push(action.payload)
        }

    }
})
export const { addToCart } = cartSlice.actions;
export default cartSlice.reducer;