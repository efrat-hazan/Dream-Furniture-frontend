import { createSlice } from "@reduxjs/toolkit"

const initialState={
   sum: 0
}

export const sumShoppingSlice=createSlice({
   name:"sumShopping",
   initialState,
   reducers:{
      setSumShpping(state, actoin){
         state.sum=actoin.payload;
      }
   }
})

export const {setSumShpping}=sumShoppingSlice.actions
export default sumShoppingSlice.reducer

