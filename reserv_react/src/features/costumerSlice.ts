import { PayloadAction, createSlice } from "@reduxjs/toolkit";

interface Customer {
  id: number;
  name: string;
  food: string[];
}
interface customerStateType {
  value: Customer[];
}

interface FoodPayload {
  id: number;
  food: string;
}

const initialState: customerStateType = {
  value: [],
};

export const customerSlice = createSlice({
  name: "customer",
  initialState,
  reducers: {
    addCustomer: (state, action: PayloadAction<Customer>) => {
      state.value.push(action.payload);
    },
    addFoodToCustomer: (state, action: PayloadAction<FoodPayload>) => {
      state.value.forEach((item) => {
        if (item.id === action.payload.id) {
          item.food.push(action.payload.food);
        }
      });
    },
  },
});

export const { addCustomer, addFoodToCustomer } = customerSlice.actions;
export default customerSlice.reducer;
