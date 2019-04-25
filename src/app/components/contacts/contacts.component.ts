import { Component, OnInit } from '@angular/core';
import { ContactService } from 'src/app/services/contact.service';
import { IContact } from 'src/app/interfaces/icontact';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styles: []
})
export class ContactsComponent implements OnInit {

  contactList: IContact[];
  errorMsg: string;
  constructor( private contactService: ContactService) { }

  ngOnInit() {
    //connect to service 
    //send a call to get contacts 
    this.contactService.getContacts()
              .subscribe((res: IContact[]) => { 
                  console.log('HTTP response', res) 
                  this.contactList = res;
                },
                err => { 
                  console.log('HTTP Error', err) 
                  this.errorMsg = err;
                },
                () => console.log('HTTP request completed.')
            );
    
  }

}
