import axios from "axios";
const authEndPoint = "oauth2/password/";

const httpAuth = axios.create({
    baseURL: "https://startup-summer-2023-proxy.onrender.com/2.0/",
    headers: {
        "x-secret-key": "GEU4nvd3rej*jeh.eqp",
        "X-Api-App-Id":
            "v3.r.137541555.d3bb2354c7cc5b2cd8111a06b84c05a1096c33d4.460e0cd182fc37146d696674e529e6f2b6289a72",
        "Content-Type": "application/x-www-form-urlencoded",
    }
})



const authService = {
    login: async () => {
        const { data } = await httpAuth.get(authEndPoint, {
            params: {
                login: "sergei.stralenia@gmail.com",
                password: "paralect123",
                client_id: "2356",
                client_secret:
                    "v3.r.137440105.ffdbab114f92b821eac4e21f485343924a773131.06c3bdbb8446aeb91c35b80c42ff69eb9c457948",
                hr: '0',
            },
        });
        return data;
    },
};

export default authService;
