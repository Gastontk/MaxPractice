import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from "./app.component";
import { HttpModule } from '@angular/http';
import { RouterModule, Router } from '@angular/router';

import { PersonComponent } from './person/person.component'
import { ListComponent } from './list/list.component';
import { PersonService } from './person.service';  
import { SidebarComponent } from './sidebar/sidebar.component'
import { AddDeleteComponent } from './addDelete/addDelete.component'
import { SiblingsComponent } from './siblings/siblings.component'

const appRoutes: Routes=[
	 { path: '',
    redirectTo: '/list',
    // canActivate:[AuthGuard], 
    pathMatch: 'full',
    },
	{path: 'xxx', component: AddDeleteComponent},
	{path: 'person/:id', component: PersonComponent},
	{path: 'list', component: ListComponent},
    {path: 'siblings/:id', component: SiblingsComponent}

]


@NgModule({
    declarations: [
        AppComponent,
        PersonComponent,
        ListComponent,
        SidebarComponent,
        AddDeleteComponent,
        SiblingsComponent
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