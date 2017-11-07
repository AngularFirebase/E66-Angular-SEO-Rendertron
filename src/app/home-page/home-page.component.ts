import { Component, OnInit } from '@angular/core';
import { SeoService } from '../seo.service';


@Component({
  selector: 'home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.sass'],
})
export class HomePageComponent implements OnInit {

  constructor(private seo: SeoService) { }

  ngOnInit() {
    this.seo.generateTags({
      title: 'Home Page', 
      description: 'My SEO friendly home page in Angular 5', 
      image: 'https://instafire-app.firebaseapp.com/assets/camel.jpeg'
    })
  }

}
