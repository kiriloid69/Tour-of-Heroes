import { NgModule } from '@angular/core';
import { LoginPageComponent } from '../login-page/login-page.component';
import { RegisterPageComponent } from '../register-page/register-page.component';
import { RestorePasswordComponent } from '../restore-password/restore-password.component';

@NgModule({
    declarations: [
        LoginPageComponent,
        RegisterPageComponent,
        RestorePasswordComponent
    ],
    imports: [
    ],
    exports: [
        LoginPageComponent,
        RegisterPageComponent,
        RestorePasswordComponent,

    ],
})
export class AuthModule {}
