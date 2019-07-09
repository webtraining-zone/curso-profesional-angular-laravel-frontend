import {Injectable} from '@angular/core';
import {CarbonLDP} from 'carbonldp';
import {Document} from 'carbonldp/Document';
import {USERS_CONTAINER} from "../../../config/carbonLDP/schemas";

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  user: User;

  constructor(private carbonLDP: CarbonLDP) {
  }

  getCarbonUser(userId) {
    return this.carbonLDP.documents.$get(USERS_CONTAINER + userId + '/')
      .then((user: Document & User) => {
        this.user = user;
      });
  }

  public getUser() {
    return this.user;
  }
}


export class User {
  id: string;
  email: string;
  name: string;
}
