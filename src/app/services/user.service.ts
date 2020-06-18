import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";
import {map} from "rxjs/operators";
import {User} from "./user";

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private apiUrl= "http://localhost:8080/authentification";

  public httpOptions={ headers: new HttpHeaders({ 'Content-Type': 'application/json'})};

 // private headers: HttpHeaders = new HttpHeaders({ 'Content-Type': 'application/json'});


  constructor(private httpClient : HttpClient) {

  }
  authentification (login : string , password :string) : Observable<User>{
    return this.httpClient.post(this.apiUrl, {login :login,password:password},this.httpOptions).pipe(map((result: any ) => {
      return result;
    }));

  }

  }
// public findProduct(productCode: string) {
//   const url_ = 'api/product/findProduct';
//   const params = new URLSearchParams();
//   params.set('productCode', productCode);
//
//   return this.http.post(url_,,params, httpHeaders)
//     .subscribe(
//       result => {
//         console.log(result);
//       },
//       error => {
//         console.log('There was an error: ')
//       }
//     );
// }
