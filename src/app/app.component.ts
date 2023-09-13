import { Component,OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'table-filter';
  data=[
    {sno:"1",fname:"sarath",lname:"P",email:"sarath@gmail.com",phonenumber:"987654321"},
    {sno:"2",fname:"Santhosh",lname:"P",email:"santhosh@gmail.com",phonenumber:"1234567879"},
    {sno:"3",fname:"vignesh",lname:"U",email:"vicky@gmail.com",phonenumber:"21435470698"},
    {sno:"4",fname:"Sam",lname:"K",email:"samanderson@gmail.com",phonenumber:"7284263822"},
    {sno:"5",fname:"kicha",lname:"L",email:"kicha@gmail.com",phonenumber:"6121212321"},
    {sno:"6",fname:"pradeep",lname:"kumar",email:"prashi@gmail.com",phonenumber:"6321426123"},
    {sno:"7",fname:"Guru",lname:"R",email:"moorthy@gmail.com",phonenumber:"8765432001"},
    {sno:"8",fname:"Sadam",lname:"H",email:"hussain@gmail.com",phonenumber:"7654321987"},
    {sno:"9",fname:"sarath",lname:"kumar",email:"sarth@gmail.com",phonenumber:"987654321"},
    {sno:"10",fname:"sarath",lname:"kumar",email:"sarth@gmail.com",phonenumber:"987654321"},
    
  ];

}

