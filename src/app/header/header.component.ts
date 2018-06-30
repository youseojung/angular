import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  @Input()title:string; //app.ts 에서 생성한게 자식한테감
  constructor() { }

  ngOnInit() {
  }

}
