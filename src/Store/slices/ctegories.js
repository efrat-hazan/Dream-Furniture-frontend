import { createSlice } from "@reduxjs/toolkit";

const initialState={
   cate:[]
};

export const categoriesSlice=createSlice({
   name: "categories", // תיקון שם ה-slice
   initialState,
   reducers:{
      setCategories(state, action){
         state.cate=action.payload;
      }
   }
})

export const {setCategories}=categoriesSlice.actions

export default categoriesSlice.reducer;
