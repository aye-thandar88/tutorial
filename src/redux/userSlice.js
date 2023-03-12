import { createSlice } from '@reduxjs/toolkit'

export const userSlice = createSlice({
    name:'user',
    initialState:{
        name:'',
        email:'',
        password:'',
    },
    reducers:{
        add: (state,action) => {
            state.name = action.payload.name;
            state.email = action.payload.email;
            state.password = action.payload.password;
        },
    }
})

export const {add} =userSlice.actions;

export default userSlice.reducer