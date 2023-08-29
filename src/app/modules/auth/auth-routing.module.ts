import { NgModule } from '@angular/core';
import { AuthComponent } from './auth.component';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ForgotPwdComponent } from './forgot-pwd/forgot-pwd.component';
import { ResetPwdComponent } from './reset-pwd/reset-pwd.component';

const routes: Routes = [
  {
    path: '',
      component: AuthComponent,
      children: [
        {
          path: '',
          component: LoginComponent
        },
        {
          path: 'register',
          component: RegisterComponent,
        },
        {
          path:'forgot/password',
          component : ForgotPwdComponent
        },
        {
          path:'reset/password',
          component : ResetPwdComponent
        },
      ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
