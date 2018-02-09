import { Component, OnInit} from '@angular/core';

import 'rxjs';
import {Observable } from 'rxjs/Rx'
import { Injectable, EventEmitter } from '@angular/core';


import { PersonComponent } from '../person/person.component'
import { PersonService } from '../person.service'



@Component({
    selector: 'app-list',
    templateUrl: './list.component.html',
    styles: [`
    		.picHolder{
    			display:inline-block;
    			margin:10px;
    			height: 500px;
                max-height:1000px;
    			width: 80%;
    			background-color:linen;
    			border: solid black 3px;
    		}
    		// .largeImageHolder{
    		// 	width: 600px;
    		// 	height: 600px;
    		// }
    `]})
export class ListComponent implements OnInit{
	large:[] = [];
	showAddChild:[] = [];
    picData = []

    timeToEdit = true;

	picWidth: '100';
	height: 100;
	color: 'red';
	myString:string = 'test string'

	getColor(){
		return 'darkGrey'
	}

    
    constructor( private personService: PersonService ){
    	// console.log('In constructor');
    }
    ngOnInit(){
    	// console.log('OnInit')
    	// this.getPics();
        this.personService.getPics()
        .subscribe(
                (data:any)=>{
                    // console.log(data._body)
                    this.picData = data.pics
                    // console.log('parents', this.picData[1].parents[0].name)
                    for(let x of this.picData){
                        this.large[x] = false;
                        this.showAddChild[x] = false;
                        // if(x.parents[0].name){
                        //  console.log('x parents', x.parents[0].name)

                        // }


                    }
                    
                },
                (err:any)=>{
                    console.log(err);
                }
            );

    }

  //grab ID and route to EDIT page for id'd user
  	startEdit(pic){
  		console.log(pic)
  		console.log(this.picData[pic]);
  	}


    getPics() {
        



    	// this.http.get('/pics').map(res =>res.json()).subscribe(
    	// 		(data:any)=>{
    	// 			// console.log(data._body)
    	// 			this.picData = data.pics
    	// 			console.log('parents', this.picData[1].parents[0].name)
    	// 			for(let x of this.picData){
    	// 				this.large[x] = false;
    	// 				this.showAddChild[x] = false;
    	// 				// if(x.parents[0].name){
    	// 				// 	console.log('x parents', x.parents[0].name)

    	// 				// }


    	// 			}
    				
    	// 		},
    	// 		(err:any)=>{
    	// 			console.log(err);
    	// 		}
    	// 	)

        

    }


}









































