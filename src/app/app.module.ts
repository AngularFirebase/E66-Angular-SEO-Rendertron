import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { AngularFireModule } from 'angularfire2';
import { environment } from '../environments/environment';


import { AngularFireDatabaseModule } from 'angularfire2/database';


/// DELETE firebaseConfig
/// Add your own firebase config to environment.ts
/// Then use it to initialize angularfire2 AngularFireModule.initializeApp(environment.firebaseConfig),
import { firebaseConfig } from '../env';
import { HomePageComponent } from './home-page/home-page.component';
import { AboutPageComponent } from './about-page/about-page.component';
import { ContactPageComponent } from './contact-page/contact-page.component';
import { FirebaseDemoComponent } from './firebase-demo/firebase-demo.component'; 

import { SeoService } from './seo.service';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    AboutPageComponent,
    ContactPageComponent,
    FirebaseDemoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule
  ],
  providers: [SeoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
