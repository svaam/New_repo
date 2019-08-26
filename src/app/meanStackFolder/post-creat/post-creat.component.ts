import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Post } from '../Interface/post.module.interface'
import { PostServiceService } from '../service/post-service.service';
@Component({
  selector: 'app-post-creat',
  templateUrl: './post-creat.component.html',
  styleUrls: ['./post-creat.component.css']
})
export class PostCreatComponent implements OnInit {

  @Output() postCreate = new EventEmitter();
  postTitle: any;
  postContent: any;

  constructor(private postService: PostServiceService) { }

  ngOnInit() {
  }

  getPost(formValue:NgForm){
    console.log(formValue);
    // if(formValue.invalid){
    //   return;
    // }
    const post : Post = {
      postTitle : formValue.value.title,
      postContent : formValue.value.content
    }
    // this.postCreate.emit(post);
    this.postService.addPost(formValue.value.title,formValue.value.content);


    formValue.reset();



  }

}
