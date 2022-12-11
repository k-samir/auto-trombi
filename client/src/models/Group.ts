import { SubGroup } from "./SubGroup";

export class Group {
    constructor(public id:string,public owner:string,public name:string,public subGroups:SubGroup[]) {}
}