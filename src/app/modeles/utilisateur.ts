import {Adresse} from "./adresse";

export class Utilisateur {

  public idPersonne : number;
  public nom : string;
  public prenom : string;
  public email :string;
  public login :string;
  public password : string;
  public numeroTelephone: string;
  public adresse:Adresse;
  public role : string;


  constructor(nom: string, prenom: string, email: string, login: string, password: string, numeroTelephone: string, adresse: Adresse, role:string) {
    this.nom = nom;
    this.prenom = prenom;
    this.email = email;
    this.login = login;
    this.password = password;
    this.numeroTelephone = numeroTelephone;
    this.adresse = adresse;
    this.role = role;
  }
}
