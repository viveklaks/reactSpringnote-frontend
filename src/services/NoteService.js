import httpClient from "../http-common";

const getAll = () =>{
    return httpClient.get("/api/notes");
}
const create = (data) =>{
    return httpClient.post("/api/notes",data);
}

export  {getAll,create};