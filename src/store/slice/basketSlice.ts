import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface IBasket {
  id: number;
  name: String;
}

interface IBasketState {
  basket: IBasket[];
}

const initialState: IBasketState = {
  basket: [],
};

export const basketSlice = createSlice({
  name: "basket",
  initialState,
  reducers: {
    addBasket: (state, action: PayloadAction<{ name: string; id: number }>) => {
      if (state.basket.findIndex((q) => q.id == action.payload.id) == -1) {
        state.basket.push({ name: action.payload.name, id: action.payload.id });
      }
    },
  },
});

export default basketSlice.reducer;

export const { addBasket } = basketSlice.actions;
