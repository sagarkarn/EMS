import Repo from "./Repo";

export default class UserRepo extends Repo {
    static async createUser(data) {
        let headers = await Repo.getHeaders();
        headers["Content-Type"] = "application/json";

        const response = await fetch(Repo.BASE_URL + "/user/store", {
            method: "POST",
            headers: headers,
            body: JSON.stringify(data),
        });

        return [response.status, await response.json()];
    }

    static async users() {
        const resopnse = await fetch(Repo.BASE_URL + "/users", {
            headers: await Repo.getHeaders(),
        });
        return await resopnse.json();
    }
}
