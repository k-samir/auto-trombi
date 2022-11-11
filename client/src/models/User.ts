import { Credentials } from "./Credentials";

export class User {
    id?:number
    firstname?:string;
    lastname?:string;
    credentials?:Credentials;
    
    constructor(firstname:string,lastname:string,credentials:Credentials) {
        this.firstname = firstname;
        this.lastname = lastname;
        this.credentials = credentials;
    }

}