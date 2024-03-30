import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {map} from 'rxjs/operators'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  loadedPosts = [];

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.fetchPosts()
  }

  onCreatePost(postData: { title: string; content: string }) {
    // Send Http request
    this.http
    .post("https://ng-recipe-guide-8b69c-default-rtdb.firebaseio.com/posts.json", postData)
    .subscribe(responseData => {
      console.log(responseData)
    });
  }

  onFetchPosts() {
    // Send Http request
    this.fetchPosts()
  }

  onClearPosts() {
    // Send Http request
  }

  private fetchPosts(){
    this.http
    .get("https://ng-recipe-guide-8b69c-default-rtdb.firebaseio.com/posts.json")
    .subscribe(posts=>{
      console.log(posts)
    })
  }
}
