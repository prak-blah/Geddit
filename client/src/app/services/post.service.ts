import { Injectable } from '@angular/core';
import { AuthService } from './auth.service';
import { Http, Headers, RequestOptions } from '@angular/http';

@Injectable()
export class PostService {

  options;
  domain = this.authService.domain;

  constructor(
    private authService: AuthService,
    private http: Http
  ) { }

  // Function to create headers, add token, to be used in HTTP requests
  createAuthenticationHeaders() {
    this.authService.loadToken(); // Get token so it can be attached to headers
    // Headers configuration options
    this.options = new RequestOptions({
      headers: new Headers({
        'Content-Type': 'application/json', // Format set to JSON
        'authorization': this.authService.authToken // Attach token
      })
    });
  }

  // Function to create a new blog post
  newPost(post) {
    this.createAuthenticationHeaders(); // Create headers
    return this.http.post(this.domain + 'posts/newPost', post, this.options).map(res => res.json());
  }
  getAllPosts() {
    this.createAuthenticationHeaders();  // Create headers
    return this.http.get(this.domain + 'posts/allPosts', this.options).map(res => res.json());
  }

}
