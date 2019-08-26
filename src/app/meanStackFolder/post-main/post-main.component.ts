import { Component, OnInit } from '@angular/core';
import { Post } from '../Interface/post.module.interface'

@Component({
  selector: 'app-post-main',
  templateUrl: './post-main.component.html',
  styleUrls: ['./post-main.component.css']
})
export class PostMainComponent implements OnInit {

  newPost: Post [] = [];
  constructor() { }

  ngOnInit() {
  }

  addPost(event){
    console.log('111', event);
    this.newPost.push(event)
    console.log(this.newPost);

    
  }

}
