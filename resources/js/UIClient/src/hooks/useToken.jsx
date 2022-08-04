import React, { useState } from "react";

function useToken() {
    const getToken = () => {
        const tokenString = sessionStorage.getItem("access_token");
        const userToken = tokenString;
        return userToken;
    };

    const [token, setToken] = useState(getToken());

    const saveToken = (userToken) => {
        if (userToken == null) {
            setToken(null);
            sessionStorage.clear();
        } else {
            sessionStorage.setItem("access_token", userToken);
            setToken(userToken);
        }
    };

    return [token, saveToken];
}

export default useToken;
