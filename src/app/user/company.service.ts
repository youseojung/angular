import { Injectable } from '@angular/core';
import { Company } from './company';


@Injectable({
  providedIn: 'root'
})
export class CompanyService {
  company:Company;
  companyList:Array<Company> = [];

  constructor() {
    this.company = new Company({name:'test'});
    for(let i=1; i<=10; i++){
      this.company = new Company({name:'abcCompany',empcount:i});
      this.companyList.push(this.company);
    }
   }
   getCompany():Company{
    return this.company;
  }
  getCompanyList():Array<Company>{

    return this.companyList;
  }
}
