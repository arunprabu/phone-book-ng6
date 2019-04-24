import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-cpb',
  templateUrl: './cpb.component.html',
  styles: []
})
export class CpbComponent implements OnInit {

  //Step1: by using @Input(), it becomes bindable custom property
  @Input() myAge: number = 20;

  //ToDo: Custom property binding with alias

  constructor() { }

  ngOnInit() {
  }

}
