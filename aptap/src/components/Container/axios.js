import axios from "axios";

const instance = axios.create({
  baseURL: "https://6177b8b59c328300175f5adc.mockapi.io/api/test/deals",
});

export default instance;
