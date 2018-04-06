import { NgModule } from '@angular/core';
import { ContactsComponent } from './contacts.component';
import { Routes, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

const configRoute: Routes = [
  { path: 'contacts', component: ContactsComponent }
];

@NgModule({
  imports: [
    RouterModule.forChild(configRoute),
    CommonModule
  ],
  declarations: [ContactsComponent]
})


export class ContactsModule {}
