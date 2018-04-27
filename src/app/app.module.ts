import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AuthService } from './auth/auth.service';
import { CallbackComponent } from './callback/callback.component';
import { NavComponent } from './nav.component';
import { AppComponent } from './app.component';
import { ProfilesComponent } from './Profiles.component';
import { WebService } from './web.service';
import { HomeComponent } from './home.component';
import { ProfileComponent } from './Profile.component';



const routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'Profiles',
    component: ProfilesComponent
  },
  {
    path: 'Profiles/:id',
    component: ProfileComponent
  },
  {
    path: 'callback',
    component: CallbackComponent
  }
];

@NgModule({
  declarations: [
    AppComponent,
    ProfilesComponent,
    HomeComponent,
    ProfileComponent,
    CallbackComponent,
    NavComponent
  ],
  imports: [
    BrowserModule, HttpModule, RouterModule.forRoot(routes), FormsModule, ReactiveFormsModule
  ],
  providers: [WebService, AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
