import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';

import { UserAccountService } from 'src/app/services/common/user-account.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styles: []
})
export class AboutComponent implements OnInit, OnDestroy {

  profileName: string;
  newProfileName: string;

  profileSubscription: Subscription;  // Important: Don't forget to unsubscribes

  constructor(private userAccountService: UserAccountService) {
    this.profileSubscription = this.userAccountService.latestUserProfile.subscribe(value => {
      console.log(value);
      this.profileName = value;
    });
  }

  ngOnInit() {
  }

  updateNameHandler(){
    console.log(this.newProfileName);
    //send the new name to common shared service
    this.userAccountService.updateProfileName(this.newProfileName)
  }

  ngOnDestroy(){
    console.log("On Destroy");
    this.profileSubscription.unsubscribe();
  }
}
