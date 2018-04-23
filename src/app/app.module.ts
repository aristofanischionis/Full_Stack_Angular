import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AuthService } from './auth/auth.service';
import { CallbackComponent } from './callback/callback.component';

import { AppComponent } from './app.component';
import { BusinessesComponent } from './businesses.component';
import { WebService } from './web.service';
import { HomeComponent } from './home.component';
import { BusinessComponent } from './business.component';



var routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'businesses',
    component: BusinessesComponent
  },
  {
    path: 'businesses/:id',
    component: BusinessComponent
  },
  {
    path: 'callback',
    component: CallbackComponent
  }
];

@NgModule({
  declarations: [
    AppComponent,
    BusinessesComponent,
    HomeComponent,
    BusinessComponent,
    CallbackComponent
  ],
  imports: [
    BrowserModule, HttpModule, RouterModule.forRoot(routes), FormsModule, ReactiveFormsModule
  ],
  providers: [WebService, AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
