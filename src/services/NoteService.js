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
const remove =(id)=>{
    return httpClient.delete(`/api/notes/${id}`);
}
const update =(data)=>{
    return httpClient.put(`/api/notes`,data);
}

export  {getAll,create,get,remove,update};