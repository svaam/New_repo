import { Component, OnInit, Input } from '@angular/core';
import { Post } from '../Interface/post.module.interface';
import { PostServiceService } from '../service/post-service.service';


@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent implements OnInit {
  // @Input() addNewPost: Post[] = [];
  addNewpost: Post[] = [];
  constructor(public postService: PostServiceService) { }

  ngOnInit() {
    this.addNewpost = this.postService.getPost();
    console.log('list',this.addNewpost);
  }

}
