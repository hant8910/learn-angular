import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-struct',
  templateUrl: './struct.component.html',
  styleUrls: ['./struct.component.css']
})
export class StructComponent implements OnInit {
  isShow = true;
  arrSubject = ['Angular', 'NodeJS', 'React'];

  constructor() { }

  ngOnInit() {
  }

  toggleShow() {
    this.isShow = !this.isShow;
  }

}
