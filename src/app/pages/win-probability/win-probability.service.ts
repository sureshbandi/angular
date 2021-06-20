import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import { environment } from '../../../environments/environment';

import { Opportunity } from '../../models/opportunity';

@Injectable({
  providedIn: 'root'
})
export class WinProbabilityService {

  constructor(private httpClient : HttpClient) { }

  public server:string = environment.apiEndpoint;

  public predict(oppObj : Opportunity){
    let headers = new HttpHeaders({
      'Content-Type': 'application/json'});
    let options = { headers: headers };
    return this.httpClient.post<string>(this.server + "winProbability/predict", JSON.stringify(oppObj), options);
  }

  
}
