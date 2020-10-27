import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule }   from '@angular/forms';
import { LoginPageComponent } from '../login-page/login-page.component';
import { RegisterPageComponent } from '../register-page/register-page.component';
import { RestorePasswordComponent } from '../restore-password/restore-password.component';
import { AuthService } from './auth.service';


@NgModule({
    declarations: [
 
    ],
    imports: [
        
    ],
    providers: [
        AuthService
    ],
    exports: [
       
    ],
})


export class AuthModule {}
