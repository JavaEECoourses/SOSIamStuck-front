import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {UserService} from "../../services/user.service";
import {Depanneur} from "../../modeles/depanneur";

@Component({
  selector: 'app-resultat-depanneur',
  templateUrl: './resultat-depanneur.component.html',
  styleUrls: ['./resultat-depanneur.component.css']
})
export class ResultatDepanneurComponent implements OnInit {

    public depanneurs : Depanneur[] ;
    public filtredDepanneurs : Depanneur[] ;
    public latitude: number;
    public longitude: number;
    public zoom: number;
    constructor(private route :ActivatedRoute, private userService : UserService) { }
    public sub: any;
    public cp: string;
    public category: string;
    public lat = 40.730610;
    public lng = -73.935242;


  ngOnInit(): void {
    this.sub = this.route.queryParams.subscribe(params => {
      this.cp = params['cp']; //
      this.category = params['category'];
      console.log(" cp :"+ this.cp + " category : "+this.category);

      // In a real app: dispatch action to load the details here.
      this.userService.getAllDepanneur().subscribe(data =>{
        this.depanneurs = data;
        if(this.depanneurs != null){
          this.filtredDepanneurs = this.depanneurs.filter(result => {
            console.log( " result cp :"+result.adresse.codePostale);
            console.log( " result categorie :"+result.categorie);
            return result.adresse.codePostale === this.cp && result.categorie === this.category;
          });
        }
      });
    });


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
