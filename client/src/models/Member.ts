import { Person } from "./Person";

export class Member implements Person {
  constructor(
    public id: string,
    public firstname: string,
    public lastname: string,
    company: string,
    picture: string,
    companyLogo: string
  ) {}
}
