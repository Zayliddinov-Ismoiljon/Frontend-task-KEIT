
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
interface UserState {
  user: any;
  isLoggedIn: boolean;
}

const initialState: UserState = {
  user: null,
  isLoggedIn: false,
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    login(state, action: PayloadAction<any>) {
      state.user = action.payload;
      state.isLoggedIn = true;
    },
    logout(state) {
      state.user = null;
      state.isLoggedIn = false;
      localStorage.removeItem('access_token');
    },
    initializeUser(state, action: PayloadAction<any>) {
      state.user = action.payload;
      state.isLoggedIn = true;
    },
  },
});

export const { login, logout, initializeUser } = userSlice.actions;

export default userSlice.reducer;

