import {Adresse} from "./adresse";

export class Depanneur {


  public idPersonne : number;
  public nom : string;
  public prenom : string;
  public categorie: string;
  public email :string;
  public login :string;
  public password : string;
  public numeroTelephone: string;
  public adresse:Adresse;
  public pays : string;
  public role : string;
  public listAgendas :[];
  public listIntervention:[];
  public rating :number;


  constructor(nom: string, prenom: string, categorie: string, email: string, login: string, password: string, numeroTelephone: string, adresse: Adresse, role: string) {
    this.nom = nom;
    this.prenom = prenom;
    this.categorie = categorie;
    this.email = email;
    this.login = login;
    this.password = password;
    this.numeroTelephone = numeroTelephone;
    this.adresse = adresse;
    this.role=role;

  }
}
