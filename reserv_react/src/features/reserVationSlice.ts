import { PayloadAction, createSlice } from "@reduxjs/toolkit";

interface reserVationStateType {
  value: string[];
}

const initialState: reserVationStateType = {
  value: [],
};

export const reservationSlice = createSlice({
  name: "reserv",
  initialState,
  reducers: {
    addReserv: (state, action: PayloadAction<string>) => {
      state.value.push(action.payload);
    },
    removeReserv: (state, action: PayloadAction<number>) => {
      state.value.splice(action.payload, 1);
    },
  },
});

export const { addReserv, removeReserv } = reservationSlice.actions;
export default reservationSlice.reducer;
