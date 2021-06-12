import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import { environment } from '../../../environments/environment';

import { User } from '../../models/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private httpClient : HttpClient) { }

  public server:string = environment.apiEndpoint;

  public updateUser(userObj : User){
    userObj.postal_code = userObj.postal_code.toString();
    let headers = new HttpHeaders({
      'Content-Type': 'application/json'});
    let options = { headers: headers };
    return this.httpClient.post<User>(this.server + "user/update", JSON.stringify(userObj), options);
  }

  public getUser(userId : number){
    
    return this.httpClient.get<User>(this.server + "getuser/"+ userId);
  }
}
