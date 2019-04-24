import { Component, OnInit } from '@angular/core';
import { ContactService } from 'src/app/services/contact.service';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styles: []
})
export class ContactsComponent implements OnInit {

  contactList: any;
  constructor( private contactService: ContactService) { }

  ngOnInit() {
    //connect to service 
    //send a call to get contacts 
    this.contactService.getContacts()
              .subscribe( resp => {
                console.log(resp);
                //save it in array
                this.contactList = resp;
                
              });
    
  }

}
