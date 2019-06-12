import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './components/shared/login/login.component';
import { RegisterComponent } from './components/shared/register/register.component';
import { SecureInnerPagesGuard } from './components/shared/services/guard/secure-inner-pages.guard';
import { DashboardComponent } from './components/shared/dashboard/dashboard.component';
import { AuthGuard } from './components/shared/services/guard/auth.guard';
import { AnnouncementsComponent } from './components/admin/announcements/announcements.component';

const routes: Routes = [
  { path: "login", component: LoginComponent, canActivate: [SecureInnerPagesGuard] },
  { path: "register", component: RegisterComponent, canActivate: [SecureInnerPagesGuard] },
  { path: "dashboard", component: DashboardComponent, canActivate: [AuthGuard] },
  { path: "announcements", component: AnnouncementsComponent, canActivate: [AuthGuard] }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
