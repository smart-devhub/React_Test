import { createSlice } from "@reduxjs/toolkit";

const initialState={
   username:"",
   password:"",
   name:"",
   pass:"",
   confirmPass:""
    
}

 const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
      login: (state,{payload}) => {
        if(payload.type==="userName"){
          state.username=payload.value
        }else{
          state.password=payload.value
        }
      },
      signUp: (state,{payload}) => {
        if(payload.type==="name"){
          state.name=payload.value
        }else if(payload.type==="pass"){
          state.pass=payload.value
        }else{
          state.confirmPass=payload.value
        }
      },
      logout:(state)=>{
       state.username="";
       state.password=""
      }
    }
   });
   export const { login,logout,signUp } = userSlice.actions;
   export default userSlice.reducer