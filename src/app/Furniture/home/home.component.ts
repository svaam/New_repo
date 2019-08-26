import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {


  showFiller = false;
  imagesUrl: any;
  
  constructor() { }

  ngOnInit() {

    this.imagesUrl = [
      'src/assets/linkedin-profile copy.png',
      'src/assets/Screenshot 2019-08-15 at 12.12.38 AM.png',
      'src/assets/Screenshot 2019-08-15 at 12.17.51 AM.png',
      'src/assets/Screen Shot 2018-05-12 at 12.52.11 PM.png',
      'src/assets/Screenshot 2019-04-19 at 10.46.27 PM.png',
      'src/assets/Screen Shot 2018-01-19 at 12.13.13 AM.png'
      ];
  }

  homeMethod(){
    alert('This is Home');
  }

  productMethod(){
    alert('This is Product')
  }

  aboutMethod(){
    alert('This is About')
  }

  

}
