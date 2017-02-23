import { RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';
import {  Main, About, Start } from './containers';
// import { AuthService } from './services'

export const routes: ModuleWithProviders = RouterModule.forRoot([{
        path: '',
        component: Main,
        canActivate: [],
        children: [
            { path: '', component: Start },
            { path: 'about', component: About }
        ]
    },
//    { path: 'auth', component: Auth },
    { path: '**', redirectTo: '' }
])
