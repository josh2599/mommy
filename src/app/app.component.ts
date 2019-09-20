import { Component } from '@angular/core';
import { interval } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  source = interval(7500);
  images = ['./assets/1.jpg', './assets/2.jpg', './assets/3.jpg', './assets/4.jpg',
'./assets/5.jpeg', './assets/6.jpeg', './assets/7.jpeg', './assets/8.jpeg'];


  changeBg() {
    console.log('Change');
    const url = this.images[Math.floor(Math.random() * this.images.length)];
    document.body.style.background = 'url(' + url + ') no-repeat center center fixed' ;
    document.body.style.backgroundSize = 'cover';
  }

  
}


