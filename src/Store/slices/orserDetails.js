import { createSlice } from "@reduxjs/toolkit";

const initialState = {
   firstName: "",
   lastName: "",
   address: "",
   city: "",
   phone: "",
   zip: "",
   email: "",
   numCard: "",
   year: "",
   month: "",
   cvv: "",
}

export const orderDetailsSlice = createSlice({
   name: "orderDetails",
   initialState,
   reducers: {
      setFirstName(state, action) {
         state.firstName = action.payload
      },
      setLastName(state, action) {
         state.lastName = action.payload
      }, 
      setAddress(state, action) {
         state.address = action.payload
      },
      setCity(state, action) {
         state.city = action.payload
      }, 
      setPhone(state, action) {
         state.phone = action.payload
      }, 
      setZip(state, action) {
         state.zip = action.payload
      }, 
      setEmail(state, action) {
         state.email = action.payload
      }, 
      setNumCard(state, action) {
         state.numCard = action.payload
      }, 
      setYear(state, action) {
         state.year = action.payload
      },
      setMonth(state, action) {
         state.month = action.payload
      },
      setCvv(state, action) {
         state.cvv = action.payload
      }
   }
})
export const {
   setFirstName,
   setLastName,
   setAddress,
   setCity,
   setPhone,
   setZip,
   setEmail,
   setNumCard,
   setYear,
   setMonth,
   setCvv
} = orderDetailsSlice.actions

export default orderDetailsSlice.reducer