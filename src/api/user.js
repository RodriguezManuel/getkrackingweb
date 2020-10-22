import { Api } from './api.js';

export { UserApi, Credentials };

class UserApi {
    static get url() {
        return `${Api.baseUrl}/user`;
    }

    static async register( username , password , email , controller ){
        const request = {
            "username": username,
            "password": password,
            "fullName": username,
            "gender": "other",
            "birthdate": 284007600000,
            "email": email,
            "phone": "01169420",
            "avatarUrl": "https://as01.epimg.net/argentina/imagenes/2019/09/17/futbol/1568751635_589606_1568752933_noticia_normal.jpg"
        }
        const result = await Api.post(`${UserApi.url}`, true , request, controller);
        return result;
    }





    static async login(credentials, controller) {
        console.log(credentials.username);
        console.log(credentials.password);
        const result = await Api.post(`${UserApi.url}/login`, false, credentials, controller);
        Api.token = result.token;
        console.log(Api.token);
        return result;
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
