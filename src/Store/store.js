import { configureStore } from "@reduxjs/toolkit";
import orderDetailsReduser from "./slices/orserDetails";
import sumShoppingReduser from "./slices/sumShopping";
import userNameReduser from "./slices/userName";
import ctegoriesReducer from "./slices/ctegories";


const store = configureStore({
   reducer: {
      sumShopping: sumShoppingReduser,
      orderDetails: orderDetailsReduser,
      userName:userNameReduser,
      categories:ctegoriesReducer
   }
});

export default store;
