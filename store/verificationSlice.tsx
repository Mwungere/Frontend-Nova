import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
export interface VerificatonState {
  email:string,
}

const initialState: VerificatonState = {
    email:"",
};

export const verificationSlice = createSlice({
  name: "verification",
  initialState,
  reducers: {
    setVerificationState: (state, action: PayloadAction<VerificatonState>) => {
      const {email } =  action.payload;
      state.email = email;
      return state      
    }
}});

export const { setVerificationState } = verificationSlice.actions;
export const verificationReducer = verificationSlice.reducer;