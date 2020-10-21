import { Api } from './api.js';

export { UserApi, Credentials };

class UserApi {
    static get url() {
        return `${Api.baseUrl}/user`;
    }

    static async login(credentials, controller) {
        console.log(credentials.username);
        console.log(credentials.password);
        const result = await Api.post(`${UserApi.url}/login`, false, credentials, controller);
        Api.token = result.token;
    }

    static async logout(controller) {
        await Api.post(`${UserApi.url}/logout`, true, controller);
        Api.token = undefined;
    }
}

class Credentials {
    constructor(username, password) {
        this.username = username;
        this.password = password;
    }
}