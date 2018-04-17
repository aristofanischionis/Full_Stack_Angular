import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

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
  }
];

@NgModule({
  declarations: [
    AppComponent,
    BusinessesComponent,
    HomeComponent,
    BusinessComponent
  ],
  imports: [
    BrowserModule, HttpModule, RouterModule.forRoot(routes), FormsModule, ReactiveFormsModule
  ],
  providers: [WebService],
  bootstrap: [AppComponent]
})
export class AppModule { }
