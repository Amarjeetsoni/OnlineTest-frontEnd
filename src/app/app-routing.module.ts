import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { AttemptTestComponent } from './attempt-test/attempt-test.component';





const routes: Routes = [
  { path: 'admin', loadChildren:()=>import('./admin/admin.module').then(m=>m.AdminModule)},
  { path: 'user', loadChildren:()=>import('./user/user.module').then(m=>m.UserModule)},
  { path: 'login', component: LoginPageComponent},
  { path: 'signup', component: SignUpComponent},
  { path: 'attemptTest/:userId/:testId', component: AttemptTestComponent},
  { path: '**', component: HomePageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
