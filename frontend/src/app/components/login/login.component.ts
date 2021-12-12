import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  rut: string = '';
  password: string = '';

  constructor() {}

  ngOnInit(): void {
  }

  login() {
    console.log(this.rut);
    console.log(this.password);
  }


}
