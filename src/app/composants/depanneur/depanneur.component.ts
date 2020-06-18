import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-depanneur',
  templateUrl: './depanneur.component.html',
  styleUrls: ['./depanneur.component.css']
})
export class DepanneurComponent implements OnInit {
  myForm = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.pattern(`^[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,4}$`)]),
  });

  constructor(private router : Router) { }

  ngOnInit(): void {
  }

  checkLogin() {
  this.router.navigate(['/inscription']);
  }

  goToSubscribe() {

  }
}
