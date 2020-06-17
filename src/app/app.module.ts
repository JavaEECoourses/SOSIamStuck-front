import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './composants/home/home.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { UtilisateurComponent } from './composants/utilisateur/utilisateur.component';
import { DepanneurComponent } from './composants/depanneur/depanneur.component';
import { InscriptionComponent } from './composants/inscription/inscription.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { ResultatDepanneurComponent } from './composants/resultat-depanneur/resultat-depanneur.component';
import { AgmCoreModule} from '@agm/core'


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    UtilisateurComponent,
    DepanneurComponent,
    InscriptionComponent,
    ResultatDepanneurComponent
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        NgbModule,
        ReactiveFormsModule,
        FormsModule,
        AgmCoreModule.forRoot({
          apiKey :'AIzaSyCfuOM2dS9S24QwiSaZWPInoSEcOYeMEU0',
          libraries: ['places']
        })
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
