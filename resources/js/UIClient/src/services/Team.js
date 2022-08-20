import Repo from "./Repo";

export default class TeamRepo extends Repo {
    static async all() {
        const response = await fetch(Repo.BASE_URL + "/teams", {
            method: "GET",
            headers: await Repo.getHeaders(),
        });
        return await response.json();
    }
    static async store(name) {
        let headers = await Repo.getHeaders();
        headers["Content-Type"] = "application/json";
        const response = await fetch(Repo.BASE_URL + "/teams/store", {
            method: "POST",
            headers: headers,
            body: JSON.stringify({ name: name }),
        });
        return response;
    }
}
