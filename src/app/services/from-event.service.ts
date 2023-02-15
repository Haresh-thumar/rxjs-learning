import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FromEventService {

  constructor() { }

  printLi(val: string, container: string) {
    let el = document.createElement('li');
    el.innerText = val;
    document.getElementById(container)?.appendChild(el);
  }
}
