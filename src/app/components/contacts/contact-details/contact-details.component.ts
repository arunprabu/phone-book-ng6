import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { ContactService } from 'src/app/services/contact.service';
import { IContact } from 'src/app/interfaces/icontact';

@Component({
  selector: 'app-contact-details',
  templateUrl: './contact-details.component.html',
  styles: []
})
export class ContactDetailsComponent implements OnInit {

  contactId: string;
  contactData: IContact;

  constructor( private _contactService: ContactService, 
              private _activatedRoute: ActivatedRoute) {
    console.log("Inside Constructor");
                //read url parameter
    this.contactId = this._activatedRoute.snapshot.paramMap.get('id');
  }

  ngOnInit() {
    console.log("Inside ngOnInit");
    //read url param to get id
    //pass the same to service method
    this._contactService.getContactById(this.contactId)
                  .subscribe( (resp: IContact ) =>{
                    console.log(resp);
                    console.log(this);
                    this.contactData = resp;
                  });

                     
  }

}
