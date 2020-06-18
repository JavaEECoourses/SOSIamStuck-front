import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from "./composants/home/home.component";
import {UtilisateurComponent} from "./composants/utilisateur/utilisateur.component";
import {DepanneurComponent} from "./composants/depanneur/depanneur.component";
import {InscriptionComponent} from "./composants/inscription/inscription.component";
import {ResultatDepanneurComponent} from "./composants/resultat-depanneur/resultat-depanneur.component";


const routes: Routes = [
  {
    path: 'home' , component : HomeComponent
  },
  { path: 'utilisateur' , component: UtilisateurComponent
  },
  {
    path : 'depanneur' , component : DepanneurComponent
  },
  {
    path : 'inscription' , component : InscriptionComponent
  },
  {
    path : 'resultat' , component : ResultatDepanneurComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
