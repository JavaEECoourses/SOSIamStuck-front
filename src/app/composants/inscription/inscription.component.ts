import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {UserService} from "../../services/user.service";
import {Utilisateur} from "../../modeles/utilisateur";
import {Depanneur} from "../../modeles/depanneur";
import {Router} from "@angular/router";
import {Adresse} from "../../modeles/adresse";

@Component({
  selector: 'app-inscription',
  templateUrl: './inscription.component.html',
  styleUrls: ['./inscription.component.css']
})
export class InscriptionComponent implements OnInit {
  public utilisateur: Utilisateur;
  public depanneur :Depanneur;
  signupForm = new FormGroup({
    nom: new FormControl('', [Validators.required]),
    prenom: new FormControl('', [Validators.required]),
    categorie : new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required]),
    adresse: new FormControl('', [Validators.required]),
    ville : new FormControl('', [Validators.required]),
    codePostale: new FormControl('', [Validators.required]),
    telephone :new FormControl('',[Validators.required]),
    login: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required]),
    pays: new FormControl('', [Validators.required]),


  });
  public selectedUserType: string;
  public category: string[] = ['mécanicien', 'plombier', 'electricien'];
  private selectedCategory: '';

  constructor(private userService: UserService, private router : Router) {
  }

  ngOnInit(): void {
  }

  selectChangeHandler(event: any) {
    this.selectedUserType = event.target.value;

  }

  selectCategoryChangeHandler(event: any) {
    this.selectedCategory = event.target.value;

  }

  saveUser() {
    if (this.selectedUserType == 'benificiaire') {

      this.utilisateur = new Utilisateur(this.signupForm.value.nom ,this.signupForm.value.prenom,this.signupForm.value.email,
        this.signupForm.value.login, this.signupForm.value.password , this.signupForm.value.telephone,
        new Adresse(this.signupForm.value.adresse,this.signupForm.value.ville, this.signupForm.value.codePostale,
          this.signupForm.value.pays),"utilisateur");
      this.userService.saveUtilisateur(this.utilisateur).subscribe(data =>{
        if (data !== null){
          this.router.navigate(['/home']);
        }
        }
      )
    }
    else if (this.selectedUserType == 'depanneur'){

      this.depanneur = new Depanneur(this.signupForm.value.nom ,this.signupForm.value.prenom,this.signupForm.value.categorie,this.signupForm.value.email,
        this.signupForm.value.login, this.signupForm.value.password , this.signupForm.value.telephone,
        new Adresse(this.signupForm.value.adresse,this.signupForm.value.ville, this.signupForm.value.codePostale,
        this.signupForm.value.pays),"depanneur");
        this.userService.saveDepanneur(this.depanneur).subscribe(data =>{
          console.log(data);
          if (data !== null){
            this.router.navigate(['/espace-depanneur']);
          }
        }
      )

    }
  }
}
