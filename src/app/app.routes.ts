import { Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';

export const routes: Routes = [
    {
        path: "",
        loadComponent: ()=> {
            return import('./components/login/login.component').then ((m)=>m.LoginComponent)
        },
    }
];
