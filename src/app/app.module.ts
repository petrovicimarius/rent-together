import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
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
    FormsModule,
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    MaterialModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    AngularFirestoreModule,
    // BrowserAnimationsModule,
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