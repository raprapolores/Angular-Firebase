import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { Post } from '../models/post';
import { PostService } from '../services/post.service';

@Component({
  selector: 'app-create-post',
  templateUrl: './create-post.component.html',
  styleUrls: ['./create-post.component.scss']
})
export class CreatePostComponent implements OnInit {

  post: Post = new Post();
  submitted = false;

  constructor(private postService: PostService) { }

  ngOnInit() {
  }

  newPost(): void{
    this.submitted = false;
    this.post = new Post();
  }

  save(){
    this.postService.createPost(this.post);
    this.post = new Post();
  }

  onSubmit(){
    this.submitted = true;
    this.save();
  }

}
