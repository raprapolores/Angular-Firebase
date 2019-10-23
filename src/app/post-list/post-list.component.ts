import { Component, OnInit } from '@angular/core';
import { PostService } from '../services/post.service';
import {  map } from 'rxjs/operators';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.scss']
})
export class PostListComponent implements OnInit {

  posts: any;
  constructor(private postService: PostService) { }

  ngOnInit() {
    this.getPostList();
  }

  getPostList(){
    this.postService.getPostList().snapshotChanges().pipe(
      map(changes => 
        changes.map(c =>
          ({ key: c.payload.key, ...c.payload.val()})
          )
      )
    ).subscribe(posts => {
      this.posts = posts;
    });
  }

  deletePosts(){
    this.postService.deleteAll().catch(err => console.log(err));
  }

}
