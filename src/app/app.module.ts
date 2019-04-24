import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/shared/header/header.component';
import { FooterComponent } from './components/shared/footer/footer.component';
import { NavComponent } from './components/shared/nav/nav.component';
import { ConceptsComponent } from './components/concepts/concepts.component';
import { ContactsComponent } from './components/contacts/contacts.component';
import { AboutComponent } from './components/about/about.component';
import { AddContactComponent } from './components/contacts/add-contact/add-contact.component';
import { ContactDetailsComponent } from './components/contacts/contact-details/contact-details.component';
import { SiComponent } from './components/concepts/si/si.component';
import { PbComponent } from './components/concepts/pb/pb.component';
import { EbComponent } from './components/concepts/eb/eb.component';
import { TwbComponent } from './components/concepts/twb/twb.component';
import { CpbComponent } from './components/concepts/cpb/cpb.component';
import { CebComponent } from './components/concepts/ceb/ceb.component';
import { ColorizrDirective } from './directives/colorizr.directive';
import { SdComponent } from './components/concepts/sd/sd.component';

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
    CebComponent,
    ColorizrDirective,
    SdComponent
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
