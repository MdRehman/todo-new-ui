import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HardCodedAuthenticationService {

  authenticate(username,password){
    if(username==='rehman' && password==='dummy'){
      sessionStorage.setItem('userSession',username);
      return true;
    }else{
      return false;
    }
  }

  isUserLoggedIn(){
    let user = sessionStorage.getItem('userSession');
    return !(user ===null)
  }

  logout(){
    sessionStorage.removeItem('userSession');
  }

  constructor() { }
}
