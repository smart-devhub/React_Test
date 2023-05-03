import { configureStore } from "@reduxjs/toolkit";

import rootReducer from './slices/RootReducer'
 
export const store = configureStore({
  reducer: rootReducer
   
  
});