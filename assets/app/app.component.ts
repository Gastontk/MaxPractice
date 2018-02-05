import { Component, OnInit} from '@angular/core';
import { Response, Headers } from '@angular/http';
import { Http, Response } from '@angular/http';
import 'rxjs';
import {Observable } from 'rxjs/Rx'
import { Injectable, EventEmitter } from '@angular/core';



@Component({
    selector: 'my-app',
    templateUrl: './app.component.html',
    styles: [`
    		.picHolder{
    			display:inline-block;
    			margin:10px;
    		}
    `]})
export class AppComponent implements OnInit{
	large:[] = [];
	showAddChild:[] = [];

	picWidth: '100';
	height: 100;
	color: 'red';
	picData = []
	myString:string = 'test string'

	getColor(){
		return 'darkGrey'
	}

    
    constructor(public http: Http){
    	console.log('In constructor');
    	
    	// 


    }
    ngOnInit(){
    	console.log('OnInit')
    	this.getPics();

    }


    getPics(){
    	this.http.get('/pics').map(res =>res.json()).subscribe(
    			(data:any)=>{
    				// console.log(data._body)
    				this.picData = data.pics
    				for(let x of this.picData){
    					this.large[x] = false;
    					this.showAddChild[x] = false;
    				}
    				// console.log(this.showAddChild);
    				console.log(this.picData[0])
    			},
    			(err:any)=>{
    				console.log(err);
    			}
    		)

    }


}






// this.http.get('/test').subscribe(
//   		(data:any):any => {
//         // console.log('Data returned from server');
//   			 const htmlBody = data._body;
//         // console.log(htmlBody);
//   			var arr = htmlBody.split(/<table/g)
//         // console.log('arr[4] is', arr[4])
//   			var arrayHolder = arr[4];
//         // console.log(arrayHolder);
//   			this.individualRecord = arrayHolder.split(/">/)
  			

//  //make sure to replace number with below length so as to use all recordes
// // this.individualRecord.length;
//   			for( var x =0; x< this.individualRecord.length; x ++){
//           // console.log(x);
//   				if(x%6 ==0){
//   					const ind = this.individualRecord[x];
//   					const indexOfGreaterThan = ind;
//    					this.addresses.push(indexOfGreaterThan);           

//             const status = this.individualRecord[x+1];
//             const alive = this.individualRecord[x+2]
// //testing
//             const open = this.individualRecord[x+3]
//             console.log('test info is',open);
//             if( open && open.includes('closed')){
//               console.log('CLOSED')
//               this.openOrClosed.push('closed')
//             }else if(open && open.includes('active')){
//               console.log('OPEN');
//               this.openOrClosed.push('open')

//             }
// //testing
//             const responder =this.individualRecord[x+5]


//             // console.log('status String is', status.substring(5,10))
//             const statusSubstring = status.substring(0, 22).split(/</g);

//             // console.log('Alive is ', alive);
//             this.statuses.push(statusSubstring);


//             // const indexOf = this.responder.indexOf('<');
//             // console.log('Index of < is', indexOf)
//             this.problem.push(responder);

//   				}
//   			}
//   			//remove first entry in array as it is blank
//   			this.addresses.splice(0,1);
//         this.statuses.splice(0,1);
//         // console.log('this.addresses is:', this.addresses);
//   			for( var x = 0; x< this.addresses.length; x++){
//   				//split off < to clean up back of address.
//   				// console.log(this.addresses[x].split(/</g));
//   				this.addresses[x] = (this.addresses[x].split(/</g)[0]);
//           // console.log('results, different positions', this.addresses[x].split(/</g)[3])
          

     

// //get lat long from address
//           this.getLatLong(this.addresses[x]);







// 							// (data) =>{
//        //            if(data.json().results[0].geometry != undefined){
//        //              console.log('PUshing result')
//        //               this.positions.push(data.json().results[0].geometry.location);
//        //            }
//        //            else{
//        //              console.log('AN ERROR OCCURED')
//        //            }
//        //        },
// 						// )
//   			}

//   		}
//   	)
//   }







































