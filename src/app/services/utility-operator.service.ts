import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UtilityOperatorService {

  playlistUrl: string = 'http://localhost:3000/Playlist?q=';

  constructor(private http: HttpClient) { }

  // Create Li in HTML
  printLi(val: any, container: string) {
    let el = document.createElement('li');
    el.innerText = val;
    document.getElementById(container)?.appendChild(el);
  }

  // Notification
  notification(val: any, container: string) {
    let el = document.createElement('div');
    el.setAttribute('class', 'item');
    el.innerHTML = val;
    document.getElementById(container)?.prepend(el);
  }


  getData() {
    return this.http.get<user[]>('https://jsonplaceholder.typicode.com/users');
  }

  // getAlbums() {
  //   return this.http.get('https://jsonplaceholder.typicode.com/albums');
  // }


  getPlaylist(searchterm: any): Observable<Search> {
    return this.http.get<Search>(this.playlistUrl + searchterm);
  }
}


export interface user {
  name: string;
  id: number;
  email: string;
}


export interface Search {
  thumbnail: string;
  title: string;
  description: string;
}
