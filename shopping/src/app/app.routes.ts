import { Routes } from '@angular/router';
import { LoginPageComponent } from './modules/components/auth/login-page/login-page.component';

export const routes: Routes = [
    { path: '', redirectTo: 'login', pathMatch: 'full'},
    { path: 'login', component: LoginPageComponent, pathMatch: 'full' },
    { path: '**', redirectTo: 'login'},
];
