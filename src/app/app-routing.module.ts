import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './components/shared/login/login.component';
import { RegisterComponent } from './components/shared/register/register.component';
import { SecureInnerPagesGuard } from './services/auth-guard/guard/secure-inner-pages.guard';
import { DashboardComponent } from './components/shared/dashboard/dashboard.component';
import { AuthGuard } from './services/auth-guard/guard/auth.guard';
import { AnnouncementsComponent } from './components/admin/announcements/announcements.component';

const routes: Routes = [
  { path: "login", component: LoginComponent },
  { path: "register", component: RegisterComponent },
  { path: "dashboard", component: DashboardComponent },
  { path: "announcements", component: AnnouncementsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
