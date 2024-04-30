import { createSlice, nanoid } from "@reduxjs/toolkit";

interface User {
  id: string;
  name: string;
}

interface UsersState {
  users: User[];
}

const initialState: UsersState = {
  users: [],
};
const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    addUser: (state, action) => {
      const data = {
        id: nanoid(),
        name: action.payload,
      };
      state.users.push(data);
    },
  },
});

export const { addUser } = userSlice.actions;

export default userSlice.reducer;
