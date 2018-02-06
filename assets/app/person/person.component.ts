import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';


import { PersonService } from '../person.service'


@Component({
	selector: 'my-app-person',
    templateUrl: './app.person.html',
    styles: [`
    		
    `]
})



export class PersonComponent implements OnInit{

	picData[] = [];
	editPerson:any
	// changeableParam:any

	sentParams:any
	constructor(private route: ActivatedRoute, private personService: PersonService){

		this.route.params.subscribe(param => {
			console.log('param is', param)
         this.sentParams = this.route.snapshot.params;
        	this.personService.getPerson(this.sentParams)
		this.personService.getPics()
		.subscribe(
    			(data:any)=>{
    				console.log('Data is', data)
    				// console.log(data._body)
    				this.picData = data.pics
    				console.log('data.pickd', data.pics)
    				// console.log('parents', this.picData[1].parents[0].name)
			    	for(let x of this.picData){
						console.log('x is', x._id);
						console.log(this.sentParams.id)

						if(x._id == this.sentParams.id){
							console.log('MATCH')
							this.editPerson = x;
						}
					}
    				
    				
    			},
    			(err:any)=>{
    				console.log(err);
    			}
    			console.log('this.picData',this.picData)
    		)
		// this.personSer
    	});

	}


	ngOnInit(){


		console.log('params' ,this.route.snapshot.params)
		// this.sentParams = this.route.snapshot.params

		this.personService.getPerson(this.sentParams)
		this.personService.getPics()
		.subscribe(
    			(data:any)=>{
    				console.log('Data is', data)
    				// console.log(data._body)
    				this.picData = data.pics
    				console.log('data.pickd', data.pics)
    				// console.log('parents', this.picData[1].parents[0].name)
			    	for(let x of this.picData){
						console.log('x is', x._id);
						console.log(this.sentParams.id)

						if(x._id == this.sentParams.id){
							console.log('MATCH')
							this.editPerson = x;
						}
					}
    				
    				
    			},
    			(err:any)=>{
    				console.log(err);
    			}
    			console.log('this.picData',this.picData)
    		)
		// this.personService.getPerson('Ted');


		// this.editPerson = this.picData[this.sentParams.id]

	}



}