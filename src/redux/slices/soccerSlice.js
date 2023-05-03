import { createSlice } from "@reduxjs/toolkit";
import { fetchUsersAsync } from "./soccerAction";

const initialState={
    footballInfo:[]
}

 const soccerSlice = createSlice({
    name: "user",
    initialState,
    reducers: {},
    extraReducers:(builder) => {
        builder.addCase(fetchUsersAsync.fulfilled, (state, {payload}) => {
            
          state.footballInfo = payload; 
        });
    }
   });
  
   export default soccerSlice.reducer