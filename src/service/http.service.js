import axios from "axios";
import { getLocalStorage, setLocalStorage } from "../utils/localStorage";

const http = axios.create({
    baseURL: "https://startup-summer-2023-proxy.onrender.com/2.0/",
    headers: {
        "Authorization": ``,
        "x-secret-key": "GEU4nvd3rej*jeh.eqp",
        "X-Api-App-Id":
            "v3.r.137541555.d3bb2354c7cc5b2cd8111a06b84c05a1096c33d4.460e0cd182fc37146d696674e529e6f2b6289a72",
        "Content-Type": "application/x-www-form-urlencoded",
    },
});

http.interceptors.request.use(
    async function (config) {
        console.log(config.headers.Authorization);
        const expiresDate = getLocalStorage('token').expires_in
        const refreshToken = getLocalStorage('token').refresh_token
        const accessToken = getLocalStorage("token")?.access_token
        console.log(config);
        if (!config.headers.Authorization) {
            config.headers.Authorization = `Bearer ${getLocalStorage("token")?.access_token}`
        }
        if (expiresDate < Date.now()) {
            // отправить refresh token
            config.params = { ...config.params, auth: accessToken };
        }

        return config;
    },
    function (error) {
        return Promise.reject(error);
    }
);

const httpService = {
    get: http.get,
    post: http.post,
    path: http.patch,
};
export default httpService;
