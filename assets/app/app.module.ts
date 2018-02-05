import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from "./app.component";
import { HttpModule } from '@angular/http';


@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [BrowserModule, HttpModule],
    bootstrap: [AppComponent]
})
export class AppModule {

}