import { Api } from './api.js';

export { UserApi, Credentials, ToVerify };

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
        const result = await Api.post(`${UserApi.url}/login`, false, credentials, controller);
        sessionStorage.setItem('token', result.token);
        return result;
    }
    static async verify(v, controller){
        const result = await Api.post(`${UserApi.url}/verify_email`, false, v, controller);
        sessionStorage.setItem('token', result.token);
    }

    static async getCurrent(controller){
    return await Api.get(`${UserApi.url}/current`, true, controller);
    }

    static async logout(controller) {
        await Api.post(`${UserApi.url}/logout`, true, controller);
        Api.token = undefined;
        sessionStorage.setItem('token', Api.token);
    }

    static async resend(email, controller){
        let aux = {email: email};
        await Api.post(`${UserApi.url}/resend_verification`, false, aux, controller);
    }
}

class Credentials {
    constructor(username, password) {
        this.username = username;
        this.password = password;
    }
}
class ToVerify{
    constructor(email, code){
        this.email = email;
        this.code = code;
    }
}
