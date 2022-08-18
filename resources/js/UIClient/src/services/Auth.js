import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import Cookies from "js-cookie";
import useToken from "../hooks/useToken";
import Repo from "./Repo";

export const authApi = createApi({
    reducerPath: "authApi",
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
        login: builder.mutation({
            query: (body) => ({
                url: "/login",
                method: "post",
                body: body,
                headers: {
                    "X-XSRF-TOKEN": Cookies.get("XSRF-TOKEN"),
                },
            }),
        }),
    }),
});

export const { useLoginMutation } = authApi;
