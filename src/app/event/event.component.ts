import { Component, OnInit, Input } from '@angular/core';
import { Observable,fromEvent } from 'rxjs';

@Component({
  selector: 'app-event',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.scss']
})
export class EventComponent implements OnInit {
  msPos : Observable<Event>;
  msClick : Observable<Event>;

  posX : number; // 요기
  posY : number;

  targetInfo:string;
 
  @Input()subStr:string;

  
  str:string = '저는 스크립트에서 생성된 아이입니다.'
  constructor() { }

  ngOnInit() {
    this.msPos = fromEvent(document,'mousemove');
    this.msPos.subscribe(
      (event:MouseEvent)=>{
        this.posX = event.clientX; // 요기
        this.posY = event.clientY;
      }
    );
    this.msClick = fromEvent(document, 'click');
    this.msClick.subscribe(
      (event:MouseEvent)=>{
        let ojb = <HTMLElement>event.target;
       this.targetInfo =  `ojb tagName ${ojb.tagName}<br>`;
       this.targetInfo +=  `ojb id ${ojb.id}<br>`;
       this.targetInfo +=  `ojb text ${ojb.innerText}<br>`;
      }

    )
  }

}
