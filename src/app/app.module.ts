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
<<<<<<< Updated upstream
=======
import { AngularFireAuthModule } from "@angular/fire/auth";
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { environment } from '../environments/environment';
import { AuthService } from "./components/shared/services/auth.service";
import { AngularFireModule } from '@angular/fire';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { SideMenuComponent } from './components/shared/side-menu/side-menu.component';
import { TopBarComponent } from './components/shared/top-bar/top-bar.component';
>>>>>>> Stashed changes

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    LoginComponent,
    RegisterComponent,
    ProfileComponent,
    AnnouncementsComponent,
    RatingComponent,
    SideMenuComponent,
    TopBarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
