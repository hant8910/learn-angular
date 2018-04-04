import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-person',
  templateUrl: './list-person.component.html',
  styleUrls: ['./list-person.component.css']
})
export class ListPersonComponent implements OnInit {

  arrPeople = [
    { name: 'Tí', age: 10},
    { name: 'Tèo', age: 11},
    { name: 'Tũn', age: 5}
  ];

  constructor() { }

  ngOnInit() {
  }

}
