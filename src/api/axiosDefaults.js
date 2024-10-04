import axios from "axios";

axios.defaults.baseURL = "https://petspace-api-195e436e05ae.herokuapp.com/";
axios.defaults.headers.post["Content-Type"] = "multipart/form-data";
axios.defaults.withCredentials = true;