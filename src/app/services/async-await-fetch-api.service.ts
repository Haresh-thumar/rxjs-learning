import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AsyncAwaitFetchApiService {

  constructor(private _http: HttpClient) { }

  fetchApiUrl: string = 'https://jsonplaceholder.typicode.com/posts';

  getData() {
    return this._http.get(this.fetchApiUrl);
  }
}
