import axios from "axios";

const api = axios.create({
    baseURL: "https://senro.ir",
    headers: {
        "Content-Type": "application/json",
    },
    // timeout: 10000,
    timeout: 20000,
    httpsAgent: new (require("https").Agent)({ rejectUnauthorized: false }),
});

export default api