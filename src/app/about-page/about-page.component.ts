import { Component, OnInit } from '@angular/core';
import { SeoService } from '../seo.service';

@Component({
  selector: 'about-page',
  templateUrl: './about-page.component.html',
  styleUrls: ['./about-page.component.sass']
})
export class AboutPageComponent implements OnInit {

  constructor(private seo: SeoService) { }

  ngOnInit() {
    this.seo.generateTags({
      title: 'About Page', 
      description: 'This is my about page - did I mention that its link bot friendly?', 
      image: 'https://instafire-app.firebaseapp.com/assets/dog.jpeg',
      slug: 'about-page'
    })
  }

}
