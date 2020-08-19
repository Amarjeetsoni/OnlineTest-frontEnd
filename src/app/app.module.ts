import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { HomePageComponent } from './home-page/home-page.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { AttemptTestComponent } from './attempt-test/attempt-test.component';
import { MainService } from './Services/main.services';
import { AuthenticationService } from './Services/authentication.service';
import { JWT_OPTIONS, JwtHelperService } from '@auth0/angular-jwt';
import { HttpInterceptorInterceptor } from './Services/http-interceptor.interceptor';
import { AuthguardGuard } from './guards/authguard.guard';
import { AdminGuard } from './guards/admin.guard';
import { LoaderService } from './admin/Services/loader.services';
import { CrrtAnsPipe } from './pipes/crrt-ans.pipe';


@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    LoginPageComponent,
    SignUpComponent,
    AttemptTestComponent,
    CrrtAnsPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [
    MainService,
    AuthenticationService,
    AuthguardGuard,
    LoaderService,
    AdminGuard,
    { provide: JWT_OPTIONS, useValue: JWT_OPTIONS },
    JwtHelperService,
    { provide: HTTP_INTERCEPTORS, useClass: HttpInterceptorInterceptor, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
