import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
    getEmail() {
        throw new Error('Method not implemented.');
    }

  constructor() { }

  setdata(formdata:any){
    sessionStorage.setItem("email",formdata.email)
    sessionStorage.setItem("usertype","customer")
  }

getemail(){
  return sessionStorage.getItem("email")
}
getusertype(){
  return sessionStorage.getItem("usertype")
}

removedata(){
  sessionStorage.clear()
}

}
