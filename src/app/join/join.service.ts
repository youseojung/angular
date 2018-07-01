import { Injectable } from '@angular/core';
import { User } from '../user/user';

@Injectable({
  providedIn: 'root'
})
export class JoinService {
private user:User = new User();
private userInfo:User = new User();
  constructor() {}
    join(user:User){
      this.userInfo = user;
      this.user = user;
    }
    login(user:User):boolean{
      if(this.user.id==user.id){
        if(this.user.pwd==user.pwd){
          return true;
        }
      }
      return false;
    }

    getUser():User{
      return this.user;
    }
   

}
