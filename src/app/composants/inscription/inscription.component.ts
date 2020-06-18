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
    public selectedUserType: string;
    public category :string[] = ['mécanicien','plombier','electricien'];
    private selectedCategory: '';

  constructor() { }

  ngOnInit(): void {
  }

  selectChangeHandler(event: any) {
    this.selectedUserType = event.target.value;

  }

  selectCategoryChangeHandler(event: any) {
    this.selectedCategory = event.target.value;

  }
}
