import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
  @Input()footContent:string; //app.ts 에서 생성한게 자식한테감

  constructor() { }

  ngOnInit() {
  }

}
