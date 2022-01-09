import httpClient from "../http-common";

const getAll = () =>{
    return httpClient.get("/api/notes");
}
const create = (data) =>{
    return httpClient.post("/api/notes",data);
}
const get =(id)=>{
    return httpClient.get(`/api/notes/${id}`);
}

export  {getAll,create,get};