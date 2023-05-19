import httpService from "./http.service";

const industryEndpoint = "catalogues/";

const industryService = {
    get: async () => {
        const { data } = await httpService.get(industryEndpoint);
        return data;
    },
};

export default industryService;
