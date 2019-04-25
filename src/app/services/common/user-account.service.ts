import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserAccountService {

  //Step 1: Create BehaviourSubject with default value for subscribing first
  private userProfile = new BehaviorSubject<string>("CGI");

  //Step 2: Create Observable for the BehaviourSubject.. so any component can subscribe to it.
  latestUserProfile = this.userProfile.asObservable(); // latestUserProfile is subscribabale

  constructor() { }

  updateProfileName(newName: string ){
    console.log(newName);
    this.userProfile.next(newName);
  }
}
