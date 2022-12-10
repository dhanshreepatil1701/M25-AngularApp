import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-my-component',
  //Internal Template
  template:`<h1>{{name1}}</h1>
              <body>
                Hey, Siri, how to know more about Angular And TypeScript?
              </body>
              `,
  //External Template
  //templateUrl: './my-component.component.html',
  styleUrls: ['./my-component.component.css']
})
export class MyComponentComponent implements OnInit {
  
  name1="Welcome to Skillsoft platform";

  constructor(){}
  
  ngOnInit(): void {
    
  }

}
