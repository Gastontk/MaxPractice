import { Component, OnInit} from '@angular/core';

import 'rxjs';
import {Observable } from 'rxjs/Rx'

import { PersonService } from '../person.service'



@Component({
    selector: 'app-adddelete',
    templateUrl: './addDelete.component.html',
    styles: [`
    		
    `]})
export class AddDeleteComponent implements OnInit{
	large:[] = [];
	showAddChild:[] = [];
    picData = []





    
    constructor( private personService: PersonService ){
    }
    ngOnInit(){
        this.personService.getPics()
        .subscribe(
                (data:any)=>{
                    this.picData = data.pics
                    console.log('in Init', this.picData)
                },
                (err:any)=>{
                    console.log(err);
                }
            );

    }

    deletePic(pic){
        console.log('pic is', pic)
        this.personService.deletePic(pic).subscribe(
            (data:any)=>{console.log(data)},
            (err)=> {console.log(err)},
            console.log(this.picData)
            console.log(pic._id)
            this.picData.splice(pic)
            console.log('finished delete'),
            )
    }

}