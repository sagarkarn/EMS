import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import Cookies from "js-cookie";

export const userApi = createApi({
    reducerPath: "userApi",
    baseQuery: fetchBaseQuery({
        baseUrl: "http://myemssystem.herokuapp.com/api",
        credentials: "include",
        prepareHeaders: (headers, { type }) => {
            const token = sessionStorage.getItem("access_token");
            headers.append("Authorization", `Bearer ${token}`);
            return headers;
        },
    }),
    endpoints: (builder) => ({
        user: builder.query({
            query: () => "/user",
        }),
    }),
});

export const { useUserQuery } = userApi;
