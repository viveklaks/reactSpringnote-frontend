import httpClient from "../http-common";

const getAll = () =>{
    return httpClient.get("/api/notes");
}

export default  getAll ;