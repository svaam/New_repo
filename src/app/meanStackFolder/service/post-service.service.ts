import { Injectable } from '@angular/core';
import { Post } from '../Interface/post.module.interface';

@Injectable({
  providedIn: 'root'
})
export class PostServiceService {
  posts: Post[]=[]
  constructor() { }

  getPost(){
    console.log('service',this.posts)
    return this.posts;
  }

  addPost(title,content){
    const post: Post = {postTitle: title, postContent: content};
    this.posts.push(post);
    console.log('service',this.posts)
  }
}
