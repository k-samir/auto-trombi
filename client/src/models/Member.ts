import { Person } from "./Person";

export class Member implements Person {
  constructor(
    public id: string,
    public firstname: string,
    public lastname: string,
    public company: string,
    public picture: string,
    public companyLogo: string
  ) {}
}
