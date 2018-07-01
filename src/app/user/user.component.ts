import { Component, OnInit } from '@angular/core';
import {User} from './user';
import { UserService } from './user.service';
import { Company } from './company';
import { CompanyService } from './company.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss'],
  providers: [UserService,CompanyService]
})

export class UserComponent implements OnInit {
  user:User = new User();
  userList:Array<User>;
  companyList:Array<Company>;
  id:string;
  pwd:string;
  isLogin:boolean;

  constructor(private us:UserService , private cs : CompanyService) { 
    //console.log(us.getUser());
  }

  login():void{
    this.us.isLogin(new User({id:this.id , pwd:this.pwd})).subscribe(
      datas=>{
        this.isLogin = datas.isLogin;

        if(this.isLogin){
          alert("로그인성공");
        }else{
          alert("로그인실패");
        }
      },errs=>{
        console.log(errs);
      }
    )};

    
  logout():void{
    this.isLogin = false;
    alert("로그아웃됨");
  }
  //isLogin

  
  insertUser():void{
    this.us.setUser(this.user);
    this.user = new User();
  }


  viewUserList():void{
    this.us.getUsers().subscribe(
      datas=>{
        console.log(datas);
        this.userList = datas;
      },
      errs=>{

      }
    )
  }

  viewCompanyList():void{
    this.companyList = this.cs.getCompanyList();
   
  }

  chSelect(event:Event):void{
    let obj:HTMLInputElement = <HTMLInputElement>event.target;
    alert(obj.value);
    this.us.getList(obj.value).subscribe(
      data=>{
        console.log(data);
        this.userList = data[obj.value];
      },err=>{
        console.log(err);
      }
    )
  }

  ngOnInit() {

  }

}
