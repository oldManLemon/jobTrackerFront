import { Component } from '@angular/core';
import { HttpClient, HttpClientModule} from '@angular/common/http';
//import {Http, Response} from '@angular/http';
  import { from } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Job Search Tracker';
  description = 'A job tracking app';

  private apiURL = 'http://localhost:3000/jobs';
  data: any ={};
  // constructor(private http: HttpClient){
  //   //console.log('inside constructor');
  //   this.http.get(this.apiURL).subscribe(
  //     value =>{
  //       console.log('sucess')
  //     },
  //     error => {
  //       console.log('Error')
  //     }
  //   )
  // }

 
  ngOnInit(){
   
  }
  
 
  
}
