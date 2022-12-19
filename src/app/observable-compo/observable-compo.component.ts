import { AfterContentInit, Component, OnInit } from '@angular/core';
import { from, fromEvent } from 'rxjs';

@Component({
  selector: 'app-observable-compo',
  templateUrl: './observable-compo.component.html',
  styleUrls: ['./observable-compo.component.scss']
})
export class ObservableCompoComponent implements OnInit, AfterContentInit {

  postArray = [
    { title: 'batmen', description: 'batmen description' },
    { title: 'supermen', description: 'supermen description' },
    { title: 'ironmen', description: 'ironmen description' },
  ];

  /*------ convert Array to Observables ------*/
  postArrayObservable$ = from(this.postArray);

  /*------ create promise and set setTimeOut to send data in 3 second ------*/
  promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('Resolve the promise. sending data')
    }, 3000)
  })

  /*------ convert Promise to Observables ------*/
  PromiseObservable$ = from(this.promise);

  constructor() {
    // call method for Observable
    this.postArrayObservable$.subscribe({
      next: (data) => console.log(data),
      error: (err) => console.log(err),
      complete: () => console.log('Complete Done!'),
    });

    // call method for promise
    this.PromiseObservable$.subscribe({
      next: (data) => console.log(data),
      error: (err) => console.log(err),
      complete: () => console.log('Complete Done!'),
    });
  }

  ngOnInit(): void {
  }

  ngAfterContentInit() {
    /*------------ DOM Event Handler convert to observable ----------*/
    fromEvent(document.getElementById('click-button')!, 'click').subscribe({
      next: (data) => console.log(data),
      error: (err) => console.log(err),
      complete: () => console.log('Complete Done!'),
    });
  }

}
