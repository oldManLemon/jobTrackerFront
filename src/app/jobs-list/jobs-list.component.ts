import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpRequest } from '@angular/common/http';
//import { request } from 'http';

@Component({
  selector: 'app-jobs-list',
  templateUrl: './jobs-list.component.html',
  styleUrls: ['./jobs-list.component.scss'],

})
export class JobsListComponent implements OnInit {

private apiURL = 'http://localhost:3000/jobs'
  constructor(private http: HttpClient) {
   this.getData();
    
  }

getData() {
  return this.http.get(this.apiURL).subscribe(
    data =>{
      console.log(data)
      return data;
    },
    err => {
      return err
    }
  )
    
  }
  
      

  ngOnInit() {
    
  }

}
