import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {


  showFiller = false;
  imagesUrl: any[];
  cardImage: any [];
  
  constructor( private router: Router) { }

  ngOnInit() {

    this.cardImage = [
      { value :'src/assets/Webp.net-resizeimage.png', name: 'bed' },
      { value :'src/assets/Webp.net-resizeimage.png', name: 'sofa' },
      { value :'src/assets/Webp.net-resizeimage.png', name: 'chair' },
      { value :'src/assets/Webp.net-resizeimage.png', name: 'dinning' }
    ]

    this.imagesUrl = [
      'src/assets/linkedin-profile copy.png',
      'src/assets/Screenshot 2019-08-15 at 12.12.38 AM.png',
      'src/assets/Screenshot 2019-08-15 at 12.17.51 AM.png',
      'src/assets/Screen Shot 2018-05-12 at 12.52.11 PM.png',
      'src/assets/Screenshot 2019-04-19 at 10.46.27 PM.png',
      'src/assets/Screen Shot 2018-01-19 at 12.13.13 AM.png'
      ];
  }

  getImageId(Item){
    console.log('121',Item);

    switch(Item){
      case 'bed':
        console.log('bed');
        this.router.navigate(['/bed']);
        break;

        case 'sofa':
        console.log('sofa');
        this.router.navigate(['/sofa']);
        break;

        case 'chair':
        console.log('chair');
        this.router.navigate(['/chair']);
        break;

        case 'dinning':
        console.log('dinning');
        this.router.navigate(['/dinning']);
        break;
    }
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
