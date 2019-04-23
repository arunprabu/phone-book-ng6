import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-ceb',
  templateUrl: './ceb.component.html',
  styles: []
})
export class CebComponent implements OnInit {
  //Step1: create Custom Event with EventEmitter.. 
  //Step2: mention the type of data you want to pass to parent
  @Output() profileLoaded = new EventEmitter<string>();

  isLoggedIn: boolean = true;

  constructor() {
    
  }

  ngOnInit() {
 
  }
  
  loadProfile(){
    //Step 3: Emit the custom Event with the data 
    this.profileLoaded.emit("Arun");
  }

}
