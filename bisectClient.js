const axios = require("axios");

const BisectClient = class {
    #httpClient;

    constructor(apiURL, apiAuthToken) {
        this.#httpClient = axios.create({
            baseURL: `${apiURL}api/client`,
            headers: {
                Accept: "application/json",
                Authorization: `Bearer ${apiAuthToken}`,
            },
        });
    }

    async getServerResources(serverID) {
        return this.#httpClient
            .get(`servers/${serverID}/resources`)
            .then((res) => res.data);
    }
};

const client = Object.freeze(
    new BisectClient(process.env.BISECT_API_URL, process.env.BISECT_API_TOKEN)
);

const PowerState = {
    Start: "start",
    Stop: "stop",
    Restart: "restart",
};

module.exports = { BisectClient: client, PowerState };
