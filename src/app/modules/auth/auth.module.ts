import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { AuthRoutingModule } from './auth-routing.module';
import { AuthComponent } from './auth.component';
import { LoginComponent } from './login/login.component';
import { ForgotPwdComponent } from './forgot-pwd/forgot-pwd.component';
import { ResetPwdComponent } from './reset-pwd/reset-pwd.component';
import { RegisterComponent } from './register/register.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    AuthComponent,
    LoginComponent,
    ForgotPwdComponent,
    ResetPwdComponent,
    RegisterComponent
  ],
  imports: [
    CommonModule,
    AuthRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers:[HttpClient]
})
export class AuthModule { }
