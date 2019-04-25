import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, catchError } from 'rxjs/operators';
import { Observable, throwError } from 'rxjs';
import { IContact } from '../interfaces/icontact';

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  private _restApiUrl: string = "https://jsonplaceholder.typicode.com/users";

  constructor(private http: HttpClient) {
  }

  create(contactData: any): Observable<IContact> { //1. get data from comp
    console.log(contactData);
    //2. send it to rest api 
    return this.http.post(this._restApiUrl, contactData)
      .pipe(map( (resp: IContact) => { //3. get the resp from rest api
        console.log(resp);
        return resp; //4. send it back to comp 
      }));
  }

  getContacts(): Observable<IContact[]> {
    //2. send it to rest api 
    return this.http.get(this._restApiUrl)
      .pipe(
        map((resp: IContact[]) => resp ), //3. get the resp from rest api and return it back 
        catchError(err => {  //catch error
          console.log('caught with an error', err);
          return throwError(err); //throw error
        })
      );

  }

  getContactById(contactId: string): Observable<IContact>{ 
    return this.http.get("https://jsonplaceholder.typicode.com/users/" + contactId)
              .pipe(map( (resp: IContact) => {
                  console.log(resp);
                  return resp;
              }));
  }

  updateContact(contactData: IContact): Observable<IContact>{
    return this.http.put("https://jsonplaceholder.typicode.com/users/" + contactData.id, contactData)
              .pipe(map( (resp: IContact) => {
                  console.log(resp);
                  return resp;
              }));
    
  }

}
