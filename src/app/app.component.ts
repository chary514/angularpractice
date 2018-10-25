import { Component } from '@angular/core';
import {Http} from '@angular/http';

@Component({
  selector: 'app-root',
  template: `

  {{data | json}}
  
  `,
  styleUrls: ['./app.component.css']
})
export class AppComponent {

    data;
    constructor(private http:Http){

           http.get("https://jsonplaceholder.typicode.com/posts")
           .subscribe( (response) => {
                  this.data=response.json();   
           })

    }

}
