import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss']
})
export class InputComponent implements OnInit {
  clickCnt:number = 0;
  str:string;
  str2:string;
  result:number = 0;
  chkValue:string;
  constructor() { }

  ngOnInit() {
  }

  clickBtn(num:number):void{
    this.clickCnt += num;
  }

  upkey(event:KeyboardEvent){
    this.str= (<HTMLInputElement>event.target).value;
  }

  clickCaculate(add1:number,add2:number):void{
    this.result =Number(add1) + Number(add2);
  }

  
  upkey2(str:string){
    this.str2= str;
  }

  checkValue(event:Event){
    let obj:HTMLSelectElement = <HTMLSelectElement>event.target;
    alert(obj.value);
  }

  checkValue1(chkValue:string){
    alert(chkValue); 
  }


}
