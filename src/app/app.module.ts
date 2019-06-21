import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatPasswordStrengthModule } from '@angular-material-extensions/password-strength';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './components/shared/dashboard/dashboard.component';
import { LoginComponent } from './components/shared/login/login.component';
import { RegisterComponent } from './components/shared/register/register.component';
import { ProfileComponent } from './components/admin/profile/profile.component';
import { AnnouncementsComponent } from './components/admin/announcements/announcements.component';
import { RatingComponent } from './components/admin/rating/rating.component';
import { AngularFireAuthModule } from "@angular/fire/auth";
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { environment } from '../environments/environment';
import { AuthService } from "./services/auth-guard/auth.service";
import { AngularFireModule } from '@angular/fire';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { MaterialModule } from './material-module';
import { SideMenuComponent } from './components/shared/side-menu/side-menu.component';
import { TopBarComponent } from './components/shared/top-bar/top-bar.component';
import { PostService } from './services/post-service';

import { Ng5SliderModule } from 'ng5-slider';
import { RatingModule } from "ngx-rating";
import { AgmCoreModule } from '@agm/core';
import { SearchComponent } from './components/shared/search/search.component';

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
    TopBarComponent,
    SearchComponent
  ],
  imports: [
    FormsModule,
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule,
    AppRoutingModule,
    MaterialModule,
    AngularFireModule.initializeApp(environment.firebase),
    MatPasswordStrengthModule.forRoot(),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    AngularFirestoreModule,
    BrowserAnimationsModule,
    Ng5SliderModule,
    RatingModule,
    AgmCoreModule.forRoot({
      apiKey: "AIzaSyAqcFHBPQuY6E-Fd5mn9DKlks8tHhHHewM"
    }),
  ],
  exports: [
    MaterialModule,
  ],
  providers: [
    // ApiConnectionService,
    PostService,
    // DatePipe,
    // AuthGuard,
    AuthService,
  ],
  bootstrap: [
    AppComponent
  ],
})
export class AppModule { }