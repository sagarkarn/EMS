import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import Cookies from "js-cookie";
import Repo from "./Repo";

export const userApi = createApi({
    reducerPath: "userApi",
    baseQuery: fetchBaseQuery({
        baseUrl: Repo.BASE_URL,
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
