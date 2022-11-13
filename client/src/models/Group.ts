import { SubGroup } from "./SubGroup";

export class Group {
    constructor(public owner:string,public name:string,public subGroups:SubGroup[]) {}
}