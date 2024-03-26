import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    currentUser: null,
    loading: false,
}

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers:{
        signInStart:(state) =>{
            state.loading = true
        },
        signInSuccess: (state, action) => {
            state.loading = false;
            state.currentUser = action.payload
        }
    }
})

export const currentUser = (data) => data.user.currentUser

export const {signInStart, signInSuccess} = userSlice.actions
export default userSlice.reducer