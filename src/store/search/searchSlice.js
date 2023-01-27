import { createSlice } from '@reduxjs/toolkit';

export const searchSlice = createSlice({
    name: 'search',
    initialState: {
        parameter: 'all'
    },
    reducers: {
        setParatemer: (state, action) => {
            state.parameter = action.payload;
        },
    }
});


// Action creators are generated for each case reducer function
export const { setParatemer } = searchSlice.actions;