import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  searchForm = new FormGroup({
      codePostale : new FormControl('',[Validators.required,Validators.maxLength(5),Validators.minLength(5) , Validators.pattern(/^-?(0|[1-9]\d*)?$/)])
  }

  );
  selectedCategory: '';

  constructor(private router:Router) { }

  ngOnInit(): void {
  }

  rechercherDepanneur(codePostale: any, selectedCategory: any) {
  this.router.navigate(['/resultat'],{queryParams :  {cp: codePostale, category: selectedCategory}});
  }

  selectChangeHandler(event: any) {
    this.selectedCategory = event.target.value;

  }
}
