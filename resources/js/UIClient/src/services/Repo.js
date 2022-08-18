import Cookies from "js-cookie";

export default class Repo {
    // static BASE_URL = "http://localhost:8000/api";
    static BASE_URL = "http://myemssystem.herokuapp.com/api";

    static async getHeaders() {
        const token = sessionStorage.getItem("access_token");

        await fetch("sanctum/csrf-cookie");
        return {
            Authorization: `Bearer ${token}`,
            "X-XSRF-TOKEN": Cookies.get("XSRF-TOKEN"),
            Accept: "application/json",
        };
    }
}
