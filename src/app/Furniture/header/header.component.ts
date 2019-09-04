import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  Item: any[]=[]
  constructor(private router: Router) { 
    this.Item = [
      { value: 'bed', name: 'Bed'},
      { value: 'sofa', name: 'Sofa'},
      { value: 'chair', name: 'Chair'},
      { value: 'dinning', name: 'Dinning'},
      { value: 'aboutUs', name: 'About'},
      { value: 'contactUs', name: 'Contact Us'}
    ];
  }

  ngOnInit() {
  }

  goToHome(){
    this.router.navigate(['/home'])
  }

  getHeaderValue(buttonValue){
    switch(buttonValue){
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
        
        case 'aboutUs':
        console.log('aboutus');
        this.router.navigate(['/aboutus']);
        break;

        case 'contactUs':
        console.log('contactus');
        this.router.navigate(['/contactus']);
        break;
    }
  }

}
