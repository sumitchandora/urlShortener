// redux/authSlice.js
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  user: null,
 // token: null,
  isAuthenticated: false,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    loginn: (state, action) => {
      state.user = action.payload;
      //state.token = action.payload.token;
      
      state.isAuthenticated = true;
      
    },
    logoutt: (state) => {
      state.user = null;
      //state.token = null;
      state.isAuthenticated = false;

    },
  },
});

export const { loginn, logoutt } = authSlice.actions;
export default authSlice.reducer;
