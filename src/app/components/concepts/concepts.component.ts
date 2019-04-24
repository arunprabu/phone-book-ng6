import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { CebComponent } from './ceb/ceb.component';

@Component({
  selector: 'app-concepts',
  templateUrl: './concepts.component.html',
  styles: []
})
export class ConceptsComponent implements OnInit, AfterViewInit {

  @ViewChild(CebComponent) cebData;

  newAge: number = 90;
  personName: string;

  constructor() { }

  ngOnInit() {
  }

  ngAfterViewInit(){
    console.log(this.cebData);
  }

  getMyAge(){
    return 50;
  }

  profileLoadedHandler(value){ // Step5: received the data from $event 
    console.log(value);
    this.personName = value;
  }

}
