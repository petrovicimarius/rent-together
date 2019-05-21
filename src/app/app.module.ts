import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './src/app/components/shared/dashboard/dashboard.component';
import { LoginComponent } from './src/app/components/shared/login/login.component';
import { RegisterComponent } from './src/app/components/shared/register/register.component';
import { ProfileComponent } from './components/admin/profile/profile.component';
import { AnnouncementsComponent } from './components/admin/announcements/announcements.component';
import { RatingComponent } from './components/admin/rating/rating.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    LoginComponent,
    RegisterComponent,
    ProfileComponent,
    AnnouncementsComponent,
    RatingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
