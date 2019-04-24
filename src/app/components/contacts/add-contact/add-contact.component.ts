import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ContactService } from 'src/app/services/contact.service';

@Component({
  selector: 'app-add-contact',
  templateUrl: './add-contact.component.html',
  styles: []
})
export class AddContactComponent implements OnInit {

  submissionStatus: string;

  constructor( private contactService: ContactService) { //1. connect to service using Dep In    
  }

  ngOnInit() {
  }

  onSubmitHandler(formData: NgForm){
    console.log(formData);
    //if..else dirty/not /
    console.log(formData.value);
    
    //2. send the data to service 
    this.contactService.create(formData.value)
                      .subscribe( resp => { //3. receive the resp from service 
                        console.log(resp);
                        //if else 
                        //4. channelise it back to html 
                        this.submissionStatus = "Saved Successfully!"
                      })
    
    
  }
}

