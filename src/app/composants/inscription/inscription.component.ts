import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-inscription',
  templateUrl: './inscription.component.html',
  styleUrls: ['./inscription.component.css']
})
export class InscriptionComponent implements OnInit {
  signupForm = new FormGroup({
    firstname : new FormControl('',[Validators.required])});

  constructor() { }

  ngOnInit(): void {
  }

}
