import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-jobs-list',
  templateUrl: './jobs-list.component.html',
  styleUrls: ['./jobs-list.component.scss'],

})
export class JobsListComponent implements OnInit {

private apiURL = 'http://localhost:3000/jobs'
  constructor(private http: HttpClient) {
    var resp = this.http.get(this.apiURL)
    .subscribe((Response) => {return Response})
    
  }
  
      

  ngOnInit() {
    this.http.get('http://localhost:3000/jobs')
      .subscribe((response)=> {return response})
  }

}
