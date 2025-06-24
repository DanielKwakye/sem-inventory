import axios from "axios";


const baseURL = "http://localhost:8000";

const apiClient = axios.create({
    baseURL: baseURL,
});


export default apiClient