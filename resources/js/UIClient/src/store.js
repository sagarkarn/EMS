import { configureStore } from "@reduxjs/toolkit";
import { authApi } from "./services/Auth";
import { userApi } from "./services/User";
import authSlice from "./slices/auth-slice";

export const store = configureStore({
    reducer: {
        [authApi.reducerPath]: authApi.reducer,
        [userApi.reducerPath]: userApi.reducer,
        auth: authSlice.reducer,
    },
    middleware: (middleware) =>
        middleware().concat(authApi.middleware).concat(userApi.middleware),
});
