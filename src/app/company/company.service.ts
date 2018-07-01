import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Company } from './company';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CompanyService {
  company:Company;
  companyList:Array<Company> = [];

  private url:string='http://localhost:3000/';
  constructor(protected httpC:HttpClient) { 
    
  }

  companyListView():Observable<any>{
    alert("service ts");
    return this.httpC.get(this.url + 'api/companies');
  }

}


