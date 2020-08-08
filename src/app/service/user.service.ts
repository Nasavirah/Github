import { Injectable } from '@angular/core';
// Importing HttpClient module to Accessing hTTp methods
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  // Declarations
  apiUrl = 'https://api.github.com/users';

  constructor(private http: HttpClient) { }

  // get all users
  getUsers() {
    return this.http.get(`${this.apiUrl}`)
  }

  // get single user
  getUser(username: string) {
    return this.http.get(`${this.apiUrl}/${username}`)
  }

  // get particular users repositories
  getRepo(username: string, repo: string) {
    return this.http.get(`${this.apiUrl}/${username}/${repo}`)
  }
}
