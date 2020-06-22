export class Adresse {
    idAdresse : number;
   libeleAdresse:string;
   ville : string ;
   codePostale : string;
   pays : string;

  constructor(libeleAdresse : string, ville: string, codePostale: string , pays :string) {
    this.libeleAdresse=libeleAdresse;
    this.ville = ville;
    this.codePostale = codePostale;
    this.pays=pays;
  }
}
