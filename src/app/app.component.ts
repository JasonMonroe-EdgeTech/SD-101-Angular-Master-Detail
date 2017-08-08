import { Component } from '@angular/core';
import {Person} from 'app/person';

const People: Person[] = [
  {name:'Bill Gates', birthday: new Date(1955,8,28), age:61},
  {name:'John Francis Bongiovi', birthday:new Date(1962,3,2), age:55},
  {name:'Barry Sanders', birthday:new Date(1968,7,16), age:49},
];


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'People';
  people = People;
  selectedPerson:Person;

  onSelect(person:Person){
    this.selectedPerson = person;
  }
}
