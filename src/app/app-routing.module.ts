import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomePageComponent } from './home-page/home-page.component';
import { AboutPageComponent } from './about-page/about-page.component';
import { ContactPageComponent } from './contact-page/contact-page.component'; 
import { FirebaseDemoComponent } from './firebase-demo/firebase-demo.component'; 

const routes: Routes = [
  { path: '', component: HomePageComponent, },
  { path: 'about-page', component: AboutPageComponent, },
  { path: 'contact-page', component: ContactPageComponent, },
  { path: 'firebase-page', component: FirebaseDemoComponent, }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
