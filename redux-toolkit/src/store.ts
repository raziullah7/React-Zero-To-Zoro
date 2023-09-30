import { PayloadAction, configureStore, createSlice } from "@reduxjs/toolkit";

interface UserState {
    value: UserStateValue;
}

interface UserStateValue {
    username: string
}

const initialState = { value: {username: ""} } as UserState;
const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        login: (state: UserState, action: PayloadAction<UserStateValue>) => {
            state.value = action.payload;
        },
        logout: (state) => {
            state.value = initialState.value;
        },
    },
});

export const { login, logout } = userSlice.actions;

export const store = configureStore({
    reducer: {
        user: userSlice.reducer,
    },
});