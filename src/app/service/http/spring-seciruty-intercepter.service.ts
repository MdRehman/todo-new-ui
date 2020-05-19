import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpHandler, HttpRequest } from '@angular/common/http';
import { BasicAuthService } from '../basic-auth.service';

@Injectable({
  providedIn: 'root'
})
export class SpringSecirutyIntercepterService implements HttpInterceptor {

  constructor(private basicAuthService:BasicAuthService) { }
  // intercept(req: HttpRequest<any>, next: HttpHandler) {

  //   let basicHardAuth=this.basicAuthService.getAuthToken();
  //   let username = this.basicAuthService.getAuthenticatedUser();
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
  intercept(req: HttpRequest<any>, next: HttpHandler) {

    let username='rehman'
    let password ='dummy'
    let basicHardAuth= 'Basic '+ window.btoa(username+":"+password)
    console.log(username)
    console.log(basicHardAuth)
    if(basicHardAuth && username) { 
      req = req.clone({
        setHeaders : {
            Authorization : basicHardAuth
          }
        }) 
    }
    return next.handle(req)
  }

}
