import { Component, OnInit} from '@angular/core';
import { Response, Headers } from '@angular/http';
import { Http, Response } from '@angular/http';
import 'rxjs';
import {Observable } from 'rxjs/Rx'
import { Injectable, EventEmitter } from '@angular/core';


import { PersonComponent } from './person/person.component'



@Component({
    selector: 'my-app',
    templateUrl: './app.component.html',
    styles: [`
 		.main{
 			margin-left: 170px;
 			// background-color:red;

 		}


    `]})
export class AppComponent implements OnInit{
	// large:[] = [];
	// showAddChild:[] = [];
	// timeToEdit = true;

	// picWidth: '100';
	// height: 100;
	// color: 'red';
	// picData = []
	// myString:string = 'test string'

	// getColor(){
	// 	return 'darkGrey'
	// }

    
 //    constructor(public http: Http){
 //    	console.log('In constructor');
    	
 //    	// 


 //    }
 //    ngOnInit(){
 //    	console.log('OnInit')
 //    	this.getPics();

 //    }

 //  //grab ID and route to EDIT page for id'd user
 //  	startEdit(pic){
 //  		console.log(pic)
 //  		console.log(picData[pic]);
 //  	}


 //    getPics(){
 //    	this.http.get('/pics').map(res =>res.json()).subscribe(
 //    			(data:any)=>{
 //    				// console.log(data._body)
 //    				this.picData = data.pics
 //    				console.log('parents', this.picData[1].parents[0].name)
 //    				for(let x of this.picData){
 //    					this.large[x] = false;
 //    					this.showAddChild[x] = false;
 //    					// if(x.parents[0].name){
 //    					// 	console.log('x parents', x.parents[0].name)

 //    					// }


 //    				}
    				
 //    			},
 //    			(err:any)=>{
 //    				console.log(err);
 //    			}
 //    		)

 //    }


}









































