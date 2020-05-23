import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators'
import { API_URL } from '../app.constants';

export const TOKEN = 'token'
export const AUTHENTICATED_USER = 'authenticaterUser'
@Injectable({
  providedIn: 'root'
})
export class BasicAuthService {
  constructor(private http: HttpClient) { }

  
  authenticateBasicAuth(username, password) {
    
    let basicAuthHeaderString = 'Basic ' + window.btoa(username + ':' + password);

    let headers = new HttpHeaders({
        Authorization: basicAuthHeaderString
      })
    console.log("Username:"+ username)
    console.log("passowrd:"+password)
    console.log("Basic:"+basicAuthHeaderString)
    return this.http.get<AuthenticationBean>(
      `${API_URL}/basicauth`,
      {headers}).pipe(
        map(
          data => {
            sessionStorage.setItem(AUTHENTICATED_USER, username);
            sessionStorage.setItem(TOKEN, basicAuthHeaderString);
            return data;
          }
        )
      );
    //console.log("Execute Hello World Bean Service")
  }

  authenticateJWTAuth(username, password) {
    
    // let basicAuthHeaderString = 'Basic ' + window.btoa(username + ':' + password);

    // let headers = new HttpHeaders({
    //     Authorization: basicAuthHeaderString
    //   })
    // console.log("Username:"+ username)
    // console.log("passowrd:"+password)
    // console.log("Basic:"+basicAuthHeaderString)
    return this.http.post<any>(
      `${API_URL}/authenticate`,{
        username,
        password
      }
      ).pipe(
        map(
          data => {
            sessionStorage.setItem(AUTHENTICATED_USER, username);
            sessionStorage.setItem(TOKEN, `Bearer ${data.token}`);
            return data;
          }
        )
      );
    //console.log("Execute Hello World Bean Service")
  }

  getAuthenticatedUser() {
    return sessionStorage.getItem(AUTHENTICATED_USER)
  }

  getAuthToken() {
    if(this.getAuthenticatedUser())
      return sessionStorage.getItem(TOKEN)
  }

  isUserLoggedIn() {
    let user = sessionStorage.getItem(AUTHENTICATED_USER)
    return !(user === null)
  }

  logout(){
    sessionStorage.removeItem(AUTHENTICATED_USER)
    sessionStorage.removeItem(TOKEN)
  }
}

export class AuthenticationBean {
  constructor(public message: string) {

  }
}
