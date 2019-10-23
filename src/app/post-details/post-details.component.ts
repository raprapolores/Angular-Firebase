import { Component, OnInit, Input } from '@angular/core';
import {  PostService } from '../services/post.service';
import { Post } from '../models/post';

@Component({
  selector: 'app-post-details',
  templateUrl: './post-details.component.html',
  styleUrls: ['./post-details.component.scss']
})

export class PostDetailsComponent implements OnInit {

  @Input("post")post: Post;
  
  constructor(private postService: PostService) { }

  ngOnInit() {
  }

  updateActive(isActive: boolean){
    this.postService
    .updatePost(this.post.key, { active: isActive })
    .catch(err => console.log(err));
  }

  deletePost(){
    this.postService
    .deletePost(this.post.key)
    .catch(err => console.log(err));
  }

}
