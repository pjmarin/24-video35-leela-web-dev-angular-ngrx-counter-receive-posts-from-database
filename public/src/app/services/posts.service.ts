import { Post } from './../models/posts.model';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
@Injectable({
  providedIn: 'root',
})
export class PostsService {
  constructor(private http: HttpClient) {}

  getPosts(): Observable<Post[]> {
    return this.http
      // .get<Post[]>("https://vue-completecourse.firebaseio.com/posts.json")
      .get<Post[]>("http://localhost:5000/posts/getPosts")
      .pipe(
        map((data) => {
          const posts: Post[] = [];
          for (let key in data) {
            // posts.push({ ...data[key], id: (parseInt(key, 10) + 1).toString() });
            posts.push({ ...data[key], id: key });
          }
          return posts;
        })
      );
  }

//   getPosts(): Observable<Post[]> {
//     return this.http
//       .get<Post[]>("http://localhost:5000/posts/getPosts")
//   }

  addPost(post: Post): Observable<Post> {
    console.log("pasamos por aqui - add post");
    console.log("el post recibido es: ", post);
      return this.http.post<Post>(
        "http://localhost:5000/posts/addPost",
        { id: "123456", title: post.title, description: post.description }
        // { email, password, returnSecureToken: true }
      );
  }
}