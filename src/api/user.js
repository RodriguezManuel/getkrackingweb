import { Api } from './api.js';

export { UserApi, Credentials, ToVerify, AllData };

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
        sessionStorage.removeItem('token');
        sessionStorage.removeItem('currenUser');
    }

    static async getUserData(controller){
        return await Api.get( UserApi.url + '/current' , true , controller);
    }

    static async resend(email, controller){
        let aux = {email: email};
        await Api.post(`${UserApi.url}/resend_verification`, false, aux, controller);
    }

    static async update(data, controller){
        try {
            await Api.put(UserApi.url + '/current', true, data, controller);
            return true;
        } catch (error) {
            console.log(error)
            return false
        }
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

class AllData{
    constructor(username, fullName, birthdate, email, avatarURL){
        this.username = username;
        this.fullName = fullName;
        this.gender = "other";
        this.birthdate = birthdate;
        this.email = email;
        this.phone = "03034568";
        this.avatarUrl = avatarURL;
    }
}
