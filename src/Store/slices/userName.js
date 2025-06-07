import { createSlice } from "@reduxjs/toolkit";

const persistedUser = localStorage.getItem('user')
    if(persistedUser==undefined)
      persistedUser="a";
   
const initialState={
   name:persistedUser
};

export const userNameSlice=createSlice(
   {
      name:"userName",
      initialState,
      reducers:{
         setUserName(state= initialState ,action){
            state.name=action.payload;
         }
      }
   }
)
export const{setUserName}=userNameSlice.actions;
export default userNameSlice.reducer;