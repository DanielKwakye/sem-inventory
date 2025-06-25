import axios from "axios";
import {apiBaseUrl} from "@/lib/constants.ts";


const apiClient = axios.create({
    baseURL: apiBaseUrl,
});


export default apiClient