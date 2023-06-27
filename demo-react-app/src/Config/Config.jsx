import axios from "axios";

const URlApi = axios.create({
    baseURL: "https://localhost:7001/api"
});

export default URlApi;