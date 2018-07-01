import { Component, OnInit } from '@angular/core';
import { CompanyService } from './company.service';
import { Company } from './company';

@Component({
  selector: 'app-company',
  templateUrl: './company.component.html',
  styleUrls: ['./company.component.scss']
})
export class CompanyComponent implements OnInit {
  //userList:Array<User>;
  companyList:Array<Company> = [];

  constructor(private cs : CompanyService) { }

  ngOnInit() {
  }

  companyListView():void{
    this.cs.companyListView().subscribe(
      data=>{
        console.log(data);
        this.companyList = data['company'];
      },err=>{
        console.log(err);
      }
    )
  }

}
