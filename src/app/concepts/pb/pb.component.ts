import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pb',
  templateUrl: './pb.component.html',
  styles: [
    `
    .red{
      color: red;
    }
    .green{
      color: green;
      background: yellow;
    }
    `
  ]
})
export class PbComponent implements OnInit {

  myApp: string ="Propery Binding Example";

  
  constructor() { }

  ngOnInit() {
  }

  isAuthenticated(): boolean {
    return true;
  }

}
