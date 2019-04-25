import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { CebComponent } from './ceb/ceb.component';

@Component({
  selector: 'app-concepts',
  templateUrl: './concepts.component.html',
  styles: []
})
export class ConceptsComponent implements OnInit, AfterViewInit {
  //for pipes 
  loremIpsum: string ="Lorem ipsum dolor sit amet consectetur adipisicing elit. Non ipsam iure adipisci voluptate nulla nam temporibus reprehenderit vitae quasi maiores dicta deserunt soluta consectetur id, debitis rem mollitia iusto facilis.";
  birthday = new Date(1988, 3, 15); // April 15, 1988


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
