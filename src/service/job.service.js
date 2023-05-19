import httpService from "./http.service";

const jobEndpoint = "vacancies/";

const jobService = {
    get: async () => {
        const { data } = await httpService.get(jobEndpoint);
        return data;
    },
    getCurrentById: async (id) => {
        const { data } = await httpService.get(`${jobEndpoint}/${id}`);
        return data;
    },
    search: async (payload) => {
        const { data } = await httpService.get(jobEndpoint, {
            params: {
                published: 1,
                keyword: payload.search || ' ',
                payment_to: payload.paymentTo || ' ',
                payment_from: payload.paymentFrom || ' ',
                catalogues: payload.catalogues || ' ',
            },
        });
        return data;
    },
};

export default jobService;
