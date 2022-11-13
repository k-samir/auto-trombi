import { Credentials } from "./Credentials";
import { Person } from "./Person";

export class User implements Person {
    constructor(public id:string,public firstname:string, public lastname:string,credentials:Credentials) {}
}