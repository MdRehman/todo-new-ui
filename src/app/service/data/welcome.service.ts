import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { WelcomeBean } from 'src/app/welcome/welcome.component';

@Injectable({
  providedIn: 'root'
})
export class WelcomeService {

  
  
  constructor(private http:HttpClient) { }

  getWelcomeMessage(){
   return this.http.get<WelcomeBean>("http://localhost:8080/welcome-bean/");
  }
  getWelcomeMessageWithPath(name){

    // let basicHardAuth= this.createdHardAuth();
    // let headers= new HttpHeaders({
    //   Authorization:basicHardAuth
    // })
    return this.http.get<WelcomeBean>(`http://localhost:8080/welcome-bean/${name}`);
   }

  //  createdHardAuth(){
    //  let username='rehman'
    //  let password ='dummy'
    //  let basicHardAuth= 'Basic '+ window.btoa(username+":"+password)
  //    return basicHardAuth
  //  }

}
