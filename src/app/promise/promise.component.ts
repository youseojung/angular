import { Component, OnInit } from '@angular/core';
import { promise } from 'protractor';

class Log{
  num:number;
  text:string;
}
@Component({
  selector: 'app-promise',
  templateUrl: './promise.component.html',
  styleUrls: ['./promise.component.scss']
})
export class PromiseComponent implements OnInit {
  logList:Array<Log> = [];

  constructor() { }

  ngOnInit() {
  }

  setLog(text:string){
    let log:Log = new Log();
    log.num = this.logList.length + 1;
    log.text = text;
    this.logList.push(log);
  }
/*
  getPromise(text:string,time:number){
   
  }*/

  test():void{
    this.logList = [];
     setTimeout(() => {this.setLog('첫번째로그')}, 200);
     setTimeout(() => {this.setLog('두번째로그')}, 100);
  }

  syncFunc():void{
    this.logList = [];
   // let f1= this.getPromise.bind(this,'1번째',1500);
   // let f2= this.getPromise.bind(this,'2번째',500);
    //let f3= this.getPromise.bind(this,'3번째',300);
    //f1().then(f2).then(f2);
  }
  



}
