import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HeaderComponent } from './shared/header/header.component';
import { FooterComponent } from './shared/footer/footer.component';
import { NavComponent } from './shared/nav/nav.component';
import { ConceptsComponent } from './concepts/concepts.component';
import { ContactsComponent } from './contacts/contacts.component';
import { AboutComponent } from './about/about.component';
import { AddContactComponent } from './contacts/add-contact/add-contact.component';
import { ContactDetailsComponent } from './contacts/contact-details/contact-details.component';
import { SiComponent } from './concepts/si/si.component';
import { PbComponent } from './concepts/pb/pb.component';
import { EbComponent } from './concepts/eb/eb.component';
import { TwbComponent } from './concepts/twb/twb.component';
import { CpbComponent } from './concepts/cpb/cpb.component';
import { CebComponent } from './concepts/ceb/ceb.component';

const APP_ROUTES: Routes = [
  //syntax : path should have string and the component when that path is hit
  { path: '', component: ConceptsComponent },
  { path: 'concepts', component: ConceptsComponent },
  { path: 'contacts', 
   children: [
    { path: '', component: ContactsComponent },
    { path: 'new', component: AddContactComponent },
    { path: ':id', component: ContactDetailsComponent },
   ]},
  { path: 'about', component: AboutComponent }
];

//decorator
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    NavComponent,
    ConceptsComponent,
    ContactsComponent,
    AboutComponent,
    AddContactComponent,
    ContactDetailsComponent,
    SiComponent,
    PbComponent,
    EbComponent,
    TwbComponent,
    CpbComponent,
    CebComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(APP_ROUTES),
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent] // ng Module should be kickstarted with a component 
})
export class AppModule { }
