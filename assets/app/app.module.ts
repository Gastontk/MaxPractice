import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from "./app.component";
import { HttpModule } from '@angular/http';
import { RouterModule, Router } from '@angular/router';

import { PersonComponent } from './person/person.component'
import { ListComponent } from './list/list.component';
import { PersonService } from './person.service';  
import { SidebarComponent } from './sidebar/sidebar.component'


const appRoutes: Routes=[
	 { path: '',
    redirectTo: '/list',
    // canActivate:[AuthGuard], 
    pathMatch: 'full',
    },
	{path: 'person/:id', component: PersonComponent},
	{path: 'list', component: ListComponent}

]


@NgModule({
    declarations: [
        AppComponent,
        PersonComponent,
        ListComponent,
        SidebarComponent
    ],
    imports: [
    	BrowserModule, 
    	HttpModule,
    	RouterModule.forRoot(appRoutes)
    	],
    providers:[PersonService],
    bootstrap: [AppComponent]
})
export class AppModule {

}