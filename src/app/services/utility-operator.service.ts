import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UtilityOperatorService {

  constructor(private http: HttpClient) { }

  printLi(val: any, container: string) {
    let el = document.createElement('li');
    el.innerText = val;
    document.getElementById(container)?.appendChild(el);
  }


  getData() {
    return this.http.get<user[]>('https://jsonplaceholder.typicode.com/users');
  }
}


export interface user {
  name: string;
  id: number;
  email: string;
}
