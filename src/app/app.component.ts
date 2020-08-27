import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http'

import { Project } from './project.model';
import { TitleCasePipe } from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'http-route-demo';
  projects : Project [] = [];
  url = 'http://localhost:9000/listOfProjects/Angular';

  numberVal : number;
  dateVal : Date;
  pi : number;



  responseValue;
  constructor (private httpClient : HttpClient){}

  ngOnInit(){

    const headerValues ={
      accept : 'application/json',
      'content-type' : 'application/json'
    };

    this.responseValue = this.httpClient.get(this.url, {headers : headerValues});

    this.responseValue.subscribe (
     data => {
      console.log("Success -> " + data);
      let proj : Project;
      if (data != null){
        for (let index in data ){
          proj  = new Project (data[index].name, data[index].description);
          this.projects.push(proj);
        }
      }else{

      }

     },
     error => {
      console.log("Error -> " + error.statusText);
     },
     () => {
      console.log("Completed...");
     }
   );

  }

  
}
