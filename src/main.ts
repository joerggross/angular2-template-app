const global_css = require('./global.css');

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http'
import { FormsModule } from '@angular/forms';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import {
    allComponents,
    providers,
    routes,
    App
} from './app';

@NgModule({
    declarations: allComponents,
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
