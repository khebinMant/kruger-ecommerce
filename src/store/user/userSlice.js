import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
    name : "users",
    initialState:{
        currentUser: null,
        
    }, reducers:{
        setCurrentUser : (state=initialState, {payload})=>{
            state.currentUser = payload
        },
        updateCurrentUser:(state,action)=>{
            state.currentUser = action.payload;
        },
    }

})

export const {
    setCurrentUser,
    updateCurrentUser

}= userSlice.actions;