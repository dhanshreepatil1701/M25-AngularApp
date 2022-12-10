import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  //External style
  //styleUrls: ['./student.component.css']
  //Internal Style in the component file
  styles:
  [`table{
    color: brown;
    font-family: 'Courier New', Courier, monospace;
    font-size: large;
    border-collapse: collapse;
}

td{
    border: 2px solid black;
}`]

})
export class StudentComponent implements OnInit{

  name:string="Dhanshree";
  email:string="dhanshreep@gmail.com";

  constructor(){}
  ngOnInit(): void {
    
  }
  

}
