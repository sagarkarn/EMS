import Repo from "./Repo";

export default class OfficeRepo extends Repo {
    static async all() {
        console.log(Repo.BASE_URL);
        const response = await fetch(Repo.BASE_URL + "/offices", {
            method: "GET",
            headers: await Repo.getHeaders(),
        });
        return await response.json();
    }
}
