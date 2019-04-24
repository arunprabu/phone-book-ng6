import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  constructor( private http: HttpClient ) { 
  }
  
  create( contactData: any): Observable<any> { //1. get data from comp
    console.log(contactData);
    //2. send it to rest api 
    return this.http.post("https://jsonplaceholder.typicode.com/users/", contactData)
              .pipe(map( resp  => { //3. get the resp from rest api
                console.log(resp);
                return resp; //4. send it back to comp 
              }));
  }

  getContacts(){
    //2. send it to rest api 
    return this.http.get("https://jsonplaceholder.typicode.com/users/")
              .pipe(map( resp  => { //3. get the resp from rest api
                console.log(resp);
                return resp; //4. send it back to comp 
              }));
  }

  
}
