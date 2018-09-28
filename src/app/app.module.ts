import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { AppRoutingModule } from './/app-routing.module';
import { UserViewComponent } from './user-view/user-view.component';



import { BsModalModule } from 'ng2-bs3-modal';

//import * as moment from 'moment'; // add this 1 of 4

import { HttpClientModule } from '@angular/common/http';  // replaces previous Http service


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    UserViewComponent,

   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BsModalModule,
    HttpClientModule
    
   // angularMoment

  ],
  
  bootstrap: [AppComponent]
})
export class AppModule { }
