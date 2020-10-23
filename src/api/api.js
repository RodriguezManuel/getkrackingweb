export { Api };
import urlApi from '../api/paths.js'
class Api {
  static token;
  static get baseUrl() {
    return urlApi + '/api';
  }

  static get timeout() {
    return 60 * 1000;
  }

  static async fetch(url, secure, init = {}, controller) {
   Api.token = sessionStorage.getItem('token');
    if (secure && Api.token) {
      if (!init.headers)
        init.headers = {};

      init.headers['Authorization'] = `bearer ${Api.token}`;
    }

    controller = controller || new AbortController();
    const timer = setTimeout(() => controller.abort(), Api.timeout);
    init.signal = controller.signal

    try {
      const response = await fetch(url, init);
      const text = await response.text();
      const result = text ? (JSON).parse(text) : {}

      if (result.code)
        throw result;

      return result;
    } catch (error) {
      if (!error.code) {
        const error = { "code": 99, "description": error.message.toLowerCase() };
      }
      //throw error;
      return error;
    } finally {
      clearTimeout(timer);

    }
  }

  static async get(url, secure, controller) {
    return await Api.fetch(url, secure, {}, controller)
  }

  static setToken(token){
    sessionStorage.setItem('token', token);
  }

  static async post(url, secure, data, controller) {
    return await Api.fetch(url, secure, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json; charset=utf-8'
      },
      body: JSON.stringify(data)
    }, controller);
  }


  static async put(url, secure, data, controller) {
    return await Api.fetch(url, secure,{
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json; charset=utf-8'
      },
      body: JSON.stringify(data)
    }, controller);
  }

  static async delete(url, secure, controller) {
    return await Api.fetch(url, secure, {
      method: 'DELETE',
    }, controller);
  }
}