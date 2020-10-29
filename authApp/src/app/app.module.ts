import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { MaterialModule } from './material/material.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { MainPageComponent } from './main-page/main-page.component';
import { ValueComponent } from './value/value.component';
import { HttpClientModule } from '@angular/common/http';
import { AuthService } from './auth/auth.service';
import { RestorePasswordComponent } from './restore-password/restore-password.component';
import { RegisterPageComponent } from './register-page/register-page.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { EditDialogComponent } from './dialog/edit-dialog/edit-dialog.component';
import { CreateDialogComponent } from './dialog/create-dialog/create-dialog.component';

@NgModule({
    declarations: [
        LoginPageComponent,
        RegisterPageComponent,
        RestorePasswordComponent,
        AppComponent,
        ToolbarComponent,
        MainPageComponent,
        ValueComponent,
        EditDialogComponent,
        CreateDialogComponent
    ],
    entryComponents: [
        EditDialogComponent,
        CreateDialogComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        MaterialModule,
        BrowserAnimationsModule,
        FormsModule,
        ReactiveFormsModule,
        HttpClientModule
    ],
    providers: [AuthService],
    bootstrap: [AppComponent],
})
export class AppModule {}
