import { configureStore } from "@reduxjs/toolkit";
import { basketSlice } from "./slice/basketSlice";
import { TypedUseSelectorHook, useDispatch } from "react-redux";
import { useSelector } from "react-redux";

export const store = configureStore({
  reducer: {
    basket: basketSlice.reducer,
  },
});

export const useAppDispatch: () => typeof store.dispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<
  ReturnType<typeof store.getState>
> = useSelector;

export const dispatch = store.dispatch;
