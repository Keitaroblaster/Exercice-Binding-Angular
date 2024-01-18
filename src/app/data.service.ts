import { Injectable } from "@angular/core";
import { users } from "../users-data";
import { Observable } from "rxjs";

@Injectable()
export class DataService {
  users = users;
  constructor() {}

  getUsersData()  {
    // requete API 
    return this.users;
  }
}
