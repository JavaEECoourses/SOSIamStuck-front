import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-resultat-depanneur',
  templateUrl: './resultat-depanneur.component.html',
  styleUrls: ['./resultat-depanneur.component.css']
})
export class ResultatDepanneurComponent implements OnInit {

 public resultats = [
   { codePostale: 77200 , category :"mecanicien" , prenom : "zakaria" , nom : "marrah" },
   { codePostale: 75010 , category :"mecanicien" , prenom : "boris" , nom : "Sauvage" },
   { codePostale: 92200 , category :"plombier" , prenom : "stephane" , nom : "SS" },
   { codePostale: 92200 , category :"mecanicien" , prenom : "mattias" , nom : "ss" },
   { codePostale: 77200 , category :"electricien" , prenom : "maroune" , nom : "mm" },
   { codePostale: 77200 , category :"mecanicien" , prenom : "imen" , nom : "jdidi" },

    ];
    public filtredResults :({ category: string; prenom: string; nom: string; codePostale: number } | { category: string; prenom: string; nom: string; codePostale: number } | { category: string; prenom: string; nom: string; codePostale: number } | { category: string; prenom: string; nom: string; codePostale: number } | { category: string; prenom: string; nom: string; codePostale: number })[] ;
    public latitude: number;
    public longitude: number;
    public zoom: number;
    constructor(private route :ActivatedRoute) { }
    public sub: any;
    public cp: number;
    public category: string;

  ngOnInit(): void {
    this.sub = this.route.queryParams.subscribe(params => {
      this.cp = params['cp']; //
      this.category = params['category'];
      console.log(" cp :"+ this.cp + " category : "+this.category);

      // In a real app: dispatch action to load the details here.
    });
  this.filtredResults = this.resultats.filter(result =>
  result.codePostale == this.cp && result.category == this.category);
  console.log(this.filtredResults);
    this.setCurrentLocation();
  }
// Get Current Location Coordinates
  private setCurrentLocation() {
    if ('geolocation' in navigator) {
      navigator.geolocation.getCurrentPosition((position) => {
        this.latitude = position.coords.latitude;
        this.longitude = position.coords.longitude;
        //this.zoom = 15;
      });
    }
  }
}
