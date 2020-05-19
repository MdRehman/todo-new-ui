import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HardCodedAuthenticationService } from '../service/hard-coded-authentication.service';
import { BasicAuthService } from '../service/basic-auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {


  errorMessage = 'Invalid Credentials'
  username = 'rehman'
  password = ''

  loginFailed = false
  constructor(
    private route: Router, private hardCodedAuthService: HardCodedAuthenticationService, private basicAuthService: BasicAuthService
  ) { }

  ngOnInit() {
  }
  handleLogin() {

    if (this.hardCodedAuthService.authenticate(this.username, this.password)) {
      this.route.navigate(['welcome', this.username])
    } else {
      this.loginFailed = true;
    }
  }

  handleBasicLogin() {
    console.log("1")

    this.basicAuthService.authenticateBasicAuth(this.username, this.password).subscribe(
      data => {
        console.log(data)
        console.log("Inside login")
        console.log('welcome'+this.username);
        this.route.navigate(['welcome',this.username]).then(x => console.log(x));
        console.log("Reached Here told y provaeena")
        this.loginFailed = false 
              },
      error => {
        console.log(error);
        console.log("IN error")
        this.loginFailed = true;
      }
    )
  }
  
}
