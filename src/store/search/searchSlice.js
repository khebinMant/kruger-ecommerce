import { createSlice } from '@reduxjs/toolkit';

export const searchSlice = createSlice({
    name: 'search',
    initialState: {
        parameter: 'all',
        from:0,
        to:0,
    },
    reducers: {
        setParatemer: (state, action) => {
            state.parameter = action.payload;
        },
        setFrom: (state, action) => {
            state.from = action.payload;
        },
        setTo: (state, action) => {
            state.to = action.payload;
        }
    }
});


// Action creators are generated for each case reducer function
export const { setParatemer,setFrom,setTo } = searchSlice.actions;