import { Component, OnInit } from '@angular/core';
import { JoinService } from './join.service';
import { User } from '../user/user';

@Component({
  selector: 'app-join',
  templateUrl: './join.component.html',
  styleUrls: ['./join.component.scss']
})
export class JoinComponent implements OnInit {
  user:User = new User();
  userInfo:User = new User();
  loginView:boolean = true;
  infoView:boolean = false;
  constructor(private js:JoinService) { }

  ngOnInit() {
  }

  join():void{
    this.js.join(this.user);
    this.user = new User();
    alert("회원가입 성공");
    this.loginView = false;
  }
  logout():void{
    alert("로그아웃 성공");
    this.infoView = false;
    this.loginView = true;
  }
  login():void{
    if(this.js.login(this.user)){
      alert("로그인성공");
      this.userInfo = this.js.getUser();
      this.infoView = true;
    }else{
      alert("로그인실패");
      this.infoView = false;
    }
  }

}
