import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';


import { PersonService } from '../person.service'


@Component({
	selector: 'my-app-sidebar',
    templateUrl: './app.sidebar.html',
    styles: [`
        .sidenav {
            // border: solid black 2px;
            height: 100%; /* Full-height: remove this if you want "auto" height */
            width: 160px; /* Set the width of the sidebar */
            position: fixed; /* Fixed Sidebar (stay in place on scroll) */
            z-index: 1; /* Stay on top */
            top: 0; /* Stay at the top */
            left: 0;
            background-color: #111; /* Black */
            overflow-x: hidden; /* Disable horizontal scroll */
            padding-top: 20px;
        }
    		
    `]
})



export class SidebarComponent implements OnInit{
	showAddChild:[] = []
	large:[] = []
	picData[] = [];

	sentParams:any
	constructor(private route: ActivatedRoute, private personService: PersonService){}


	ngOnInit(){
		console.log('sidebar' ,this.route.snapshot.params)
		this.sentParams = this.route.snapshot.params
		this.personService.getPics()
		.subscribe(
    			(data:any)=>{
    				// console.log(data._body)
    				this.picData = data.pics
    				
    				
    			},
    			(err:any)=>{
    				console.log(err);
    			}
    		)
		// this.personService.getPerson('Ted');

	}



}