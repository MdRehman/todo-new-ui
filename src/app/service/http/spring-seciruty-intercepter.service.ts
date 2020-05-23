import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpHandler, HttpRequest } from '@angular/common/http';
import { BasicAuthService } from '../basic-auth.service';

@Injectable({
  providedIn: 'root'
})
export class SpringSecirutyIntercepterService implements HttpInterceptor {

  constructor(private basicAuthenticationService:BasicAuthService) { }
  intercept(request: HttpRequest<any>, next: HttpHandler) {

    let basicAuthHeaderString = this.basicAuthenticationService.getAuthToken();
    let username = this.basicAuthenticationService.getAuthenticatedUser()

    console.log(username)
    console.log(basicAuthHeaderString)
    if(basicAuthHeaderString && username) { 
      request = request.clone({
        setHeaders : {
            Authorization : basicAuthHeaderString
          }
        }) 
    }
    return next.handle(request);
  }
  // intercept(req: HttpRequest<any>, next: HttpHandler) {

  //   let username='rehman'
  //   let password ='dummy'
  //   let basicHardAuth= 'Basic '+ window.btoa(username+":"+password)
  //   console.log(username)
  //   console.log(basicHardAuth)
  //   if(basicHardAuth && username) { 
  //     req = req.clone({
  //       setHeaders : {
  //           Authorization : basicHardAuth
  //         }
  //       }) 
  //   }
  //   return next.handle(req)
  // }

}
