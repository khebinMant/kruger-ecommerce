import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
    name : "users",
    initialState:{
        currentUser: null,
        
    }, reducers:{
        setCurrentUser : (state, {payload})=>{
            state.currentUser = payload
          },
  
    }



})

export const {
    setCurrentUser

}= userSlice.actions;