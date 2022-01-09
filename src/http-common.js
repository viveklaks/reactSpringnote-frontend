import axios from "axios";

export default axios.create({
    baseURL: "http://localhost:8080",
    //baseURL: "https://reactspringnote-backend.herokuapp.com",
    headers:{
        "Content-type": "application/json"
    }
})