import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sd',
  templateUrl: './sd.component.html',
  styles: []
})
export class SdComponent implements OnInit {

  isLoggedIn:boolean = false;

  usersList: string[] = [
    'a', 'b', 'c', 'd'
  ];
  
  constructor() {
    
  }

  ngOnInit() {
    
  }

}
