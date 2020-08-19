import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { AttemptTestComponent } from './attempt-test/attempt-test.component';
import { AdminGuard } from './guards/admin.guard';
import { AuthguardGuard } from './guards/authguard.guard';





const routes: Routes = [
  { path: 'admin', loadChildren:()=>import('./admin/admin.module').then(m=>m.AdminModule), canActivate:[AdminGuard]},
  { path: 'user', loadChildren:()=>import('./user/user.module').then(m=>m.UserModule), canActivate:[AuthguardGuard]},
  { path: 'login', component: LoginPageComponent},
  { path: 'signup', component: SignUpComponent},
  { path: 'attemptTest/:userId/:testId', component: AttemptTestComponent, canActivate:[AuthguardGuard]},
  { path: '**', component: HomePageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
