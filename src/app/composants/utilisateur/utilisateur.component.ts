import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import { FormsModule } from '@angular/forms';
import {Router} from "@angular/router";
import {UserService} from "../../services/user.service";

@Component({
  selector: 'app-utilisateur',
  templateUrl: './utilisateur.component.html',
  styleUrls: ['./utilisateur.component.css']
})
export class UtilisateurComponent implements OnInit {
  public myForm: FormGroup;
  public sucess : boolean = true;

  constructor(private routeur : Router , private userService : UserService) { }

  ngOnInit(): void {
    this.myForm = new FormGroup({
      email: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required]),
    });
  }

  checkLogin() {
    this.userService.authentification(this.myForm.value.email,this.myForm.value.password).subscribe( data => {
      if (data !== null){
        console.log(" data :"+data.nom);
        this.sucess=true;
        this.routeur.navigate(['/home']);
      }else {
        this.sucess=false;
      }
    });

  }

  goToSubscribe() {
    this.routeur.navigate(['/inscription']);
  }
}
