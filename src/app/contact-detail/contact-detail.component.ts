import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-contact-detail',
  //templateUrl: './contact-detail.component.html',
  template: '<p>{{ name }}</p><p>{{ phoneNumber }}</p>',
  styleUrls: ['./contact-detail.component.css']
})
export class ContactDetailComponent implements OnInit {
  name = '';
  phoneNumber = '';
  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.paramMap.subscribe((params: ParamMap) => {
      const id = params.get('id');
      const name = params.get('name');
      const phoneNumber = params.get('phoneNumber');
      this.name = name;
      this.phoneNumber = phoneNumber;
    });
  }

}
