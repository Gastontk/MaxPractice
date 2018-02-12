import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';


import { PersonService } from '../person.service'


@Component({
	selector: 'my-app-siblings',
    templateUrl: './siblings.component.html',
    styles: [`
        
    `]
})



export class SiblingsComponent implements OnInit{
	picData[] = [];

	sentParams:any
	constructor(private route: ActivatedRoute, private personService: PersonService){
    this.route.params.subscribe(param => {
        console.log('param is', param)
        this.sentParams = this.route.snapshot.params;
                
        // this.personSer
        });
       
    }


	ngOnInit(){
//get all pics(people)
		this.personService.getPics()
		.subscribe(
    			(data:any)=>{
                    console.log('data.picks', data.pics);
                    this.picData = data.pics;
                    console.log('pics', this.picData)
    				
    				
    			},
    			(err:any)=>{
    				console.log(err);
    			}
    		)
        
        // this.personSer
        });





	}



}