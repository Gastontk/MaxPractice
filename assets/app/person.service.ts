import { Response, Headers } from '@angular/http';
import { Http } from '@angular/http';
import { Injectable } from '@angular/core'

@Injectable()


export class PersonService {
    large:[] = [];
	showAddChild:[] = [];
	picData = []

  	constructor(private http: Http){}
  	getPics(){


    	return this.http.get('/pics').map(res =>res.json()

    }


   getPerson(param){
   	console.log('In service getPerson', param)
   	//get a person (pic)
 
   }
}