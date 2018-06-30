import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import {MatToolbarModule, MatMenuModule} from '@angular/material'
import {FormsModule, ReactiveFormsModule} from '@angular/forms'
import {RouterModule} from '@angular/router'
import { AppComponent } from './app.component';
import { EventComponent } from './event/event.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { DirectComponent } from './direct/direct.component';

import { HomeComponent } from './home/home.component';
import { ErrorComponent } from './error/error.component';
import { InputComponent } from './input/input.component';
import { UserComponent } from './user/user.component';


@NgModule({
  declarations: [
    AppComponent,
    EventComponent,
    HeaderComponent,
    FooterComponent,
    DirectComponent,
    HomeComponent,ErrorComponent, InputComponent, UserComponent 
  ],
  imports: [
    BrowserModule,
    MatToolbarModule,
    BrowserAnimationsModule,
    MatMenuModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot([
      {path:'',component:HomeComponent},
      {path:'direct',component:DirectComponent},
      {path:'event',component:EventComponent},
      {path:'error1',component:ErrorComponent},
      {path:'input',component:InputComponent},
      {path:'user',component:UserComponent},
      {path:'**',component:ErrorComponent}
      
      //{path:'/direct',component:DirectComponent}
      //{path:'/event',component:EventComponent}
    ]

    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
