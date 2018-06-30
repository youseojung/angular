import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = '난 app.component.ts에서 생성되서 EventCoponent 인풋이야';
  headerTitle:string = 'Angular 6 with bootstrap 4';
  footerContent:string = 'app.components.ts에서 입력 된 스트링 푸터'

  inn:string; //app.ts 에서 생성한게 자식한테감
}
