import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainPageComponent } from './main-page/main-page.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { RegisterPageComponent } from './register-page/register-page.component';
import { RestorePasswordComponent } from './restore-password/restore-password.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { AuthGuard } from './auth/auth.guard';

const routes: Routes = [
    { path: '', component: MainPageComponent },
    { path: 'login', component: LoginPageComponent, canActivate: [AuthGuard] },
    { path: 'register', component: RegisterPageComponent, canActivate: [AuthGuard] },
    { path: 'restore-password', component: RestorePasswordComponent, canActivate: [AuthGuard] } ,
    { path: 'forgot-password', component: ForgotPasswordComponent, canActivate: [AuthGuard] }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})
export class AppRoutingModule {}
