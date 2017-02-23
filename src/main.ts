import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http'
import { FormsModule } from '@angular/forms';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import {
    App,
    providers,
    routes
} from './app';

import {
    Main,
    Start,
    About
} from './app/containers';

import {
    AppBar
} from './app/ui';

@NgModule({
    declarations: [
        App,
        Main,
        About,
        Start,
        AppBar
    ],
    providers: providers,
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        routes
    ],
    bootstrap: [App]
})
export class AppModule {};

platformBrowserDynamic().bootstrapModule(AppModule);
