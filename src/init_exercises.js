import urlApi from "@/api/paths";

class Builder{
    authorization = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOjEsImlhdCI6MTYwMzMwODk3MzcxMCwiZXhwIjoxNjAzMzExNTY1NzEwfQ.Xh2DLhEboXrYcPD8UazMYyZAyDYN5dBsZd5ErvYnM9I"

    async post( object , url ){
        const response = await fetch(urlApi + url ,
            {
                method: "POST",
                headers: {"content-type": "application/json"},
                body: JSON.stringify(object),
                Authorization : this.authorization,
            });//este es mi puerto de API
        return response;
    }
    async get( object , url ){
        const response = await fetch(urlApi + url ,
            {
                method: "GET",
                headers: {"content-type": "application/json"},
                body: JSON.stringify(object),
                Authorization : this.authorization,
            });//este es mi puerto de API
        return response;
    }
   Builder(){

    }
    async build() {
        const masterRoutine = {
            "name": "Master",
            "detail": "Todos los ejercicios",
            "isPublic": true,
            "difficulty": "rookie",
            "category": {
                "id": 1
            }
        }
        const result = this.post(masterRoutine , "/api/routines");
        if (result.ok) {
        }
        let result2 = this.get( {} ,"/api/routines" );
        if ( result2.ok){
            result2= result2.json();
            console.log(result2);
        }
        return "okardo";
    }
}
const a = new Builder();
console.log(a)
const mbeH = 'MBEH'
module.exports = mbeH;