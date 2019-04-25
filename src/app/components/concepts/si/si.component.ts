import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-si',
  templateUrl: './si.component.html',
  styles: []
})
export class SiComponent implements OnInit {

  myApp: string = "Phone Book";
  exp: number = 13;
  isLoggedIn: boolean = true;

  skillsList: Array<string> = [
    'html', 'css', 'nodejs'
  ]; 

  skillsList2: any[] = [
    'html', 101, {}, []
  ];  

  whatever: any = "ABC";

  constructor() { }

  ngOnInit() {
  }

  add(a: number, b: number): number {
    return a +b;
  }

}
