import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";
import {map} from "rxjs/operators";
import {User} from "./user";
import {Utilisateur} from "../modeles/utilisateur";
import {Depanneur} from "../modeles/depanneur";

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private authentificationUrl= "http://localhost:8080/authentification";
  private addUtilisateurUrl= "http://localhost:8080/addUtilisateur";
  private addDepanneur = "http://localhost:8080/addDepanneur";
  private getAllDepanneursUrl = "http://localhost:8080/AllDepanneurs";


  public httpOptions={ headers: new HttpHeaders({ 'Content-Type': 'application/json'})};

 // private headers: HttpHeaders = new HttpHeaders({ 'Content-Type': 'application/json'});




  constructor(private httpClient : HttpClient) {

  }
  authentification (login : string , password :string) : Observable<User>{
    return this.httpClient.post(this.authentificationUrl, {login :login,password:password},this.httpOptions).pipe(map((result: any ) => {
      return result;
    }));

  }
  saveUtilisateur(utilisateur : Utilisateur) : Observable<Utilisateur>{
  return this.httpClient.post(this.addUtilisateurUrl , utilisateur,this.httpOptions).pipe(map((result : any) => {
    return result;
    }));
  }

  saveDepanneur(depanneur : Depanneur) : Observable<Depanneur>{
    return this.httpClient.post(this.addDepanneur , depanneur,this.httpOptions).pipe(map((result : any) => {
      return result;
    }));
  }
  getAllDepanneur(): Observable<Depanneur[]>{
    return this.httpClient.get(this.getAllDepanneursUrl).pipe(map((result : any) => {
      return result;
    }));
  }
  }
