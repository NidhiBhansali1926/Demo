import { createSelector, createSlice, PayloadAction } from '@reduxjs/toolkit';

import { RootState } from '../index';

export type Auth = {
  token?: string;
  isLoggedIn: boolean;
};

interface LoginActionPayload {
  token: string;
}

const initialState: Auth = { isLoggedIn: false, token: '' };

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    login: (state, action: PayloadAction<LoginActionPayload>) => {
      state.isLoggedIn = true;
      state.token = action.payload.token;
    },
  },
});

export const { login: loginAction } = authSlice.actions;

export default authSlice.reducer;

export const selectAuth = (state: RootState) => state.auth;

export const selectIsLoggedIn = createSelector(selectAuth, (auth) => auth.isLoggedIn);
export const selectToken = createSelector(selectAuth, (auth) => auth.token);
