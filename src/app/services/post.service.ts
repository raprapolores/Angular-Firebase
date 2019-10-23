import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/database';
import { Post } from './../models/post';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  private dbPath = '/posts';

  constructor(private db: AngularFireDatabase) {
    this.postsRef = db.list(this.dbPath);
   }

  postsRef: AngularFireList<Post> = null;

  createPost(post : Post): void {
    this.postsRef.push(post);
  }

  updatePost(key: string, value: any): Promise<void> {
    return this.postsRef.update(key,value);
  }

  deletePost(key: string): Promise<void> {
    return this.postsRef.remove(key);
  }

  getPostList(): AngularFireList<Post> {
    return this.postsRef;
  }

  deleteAll(): Promise<void> {
    return this.postsRef.remove();
  }


}
