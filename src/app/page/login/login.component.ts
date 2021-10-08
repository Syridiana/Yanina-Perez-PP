import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from 'src/app/servicios/auth.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  email = '';
  pass = '';
  photoURL = '';
  username = "";
  tipo = "";

  constructor(private routes: Router, public authService: AuthenticationService) { 
  
  }


  ngOnInit(): void {

  }


  
  signUp() {
    this.authService.SignUp(this.email, this.pass, this.username, this.photoURL, this.tipo);
    }
    
    signIn() {
    this.authService.SignIn(this.email, this.pass);

    }
    
    signOut() {
    this.authService.SignOut();
    }

    TestSignIn() {
      this.authService.SignIn('yaninalperez@gmail.com', '123456');
      }

}
