import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export type Role = "SuperAdmin" | "Admin" | "Maintainer" | "User" | "Blogger" | "Guest";

export interface UserState {
  isAuthenticated: boolean;
  role: Role;
  name?: string;
}

const initialState: UserState = {
  isAuthenticated: false,
  role: "Guest",
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    login: (state, action: PayloadAction<{ role: Role; name: string }>) => {
      state.isAuthenticated = true;
      state.role = action.payload.role;
      state.name = action.payload.name;
    },
    logout: (state) => {
      state.isAuthenticated = false;
      state.role = "Guest";
      state.name = undefined;
    },
  },
});

export const { login, logout } = userSlice.actions;
export default userSlice.reducer;
