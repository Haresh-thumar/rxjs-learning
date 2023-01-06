import { AfterContentInit, Component, OnDestroy, OnInit } from '@angular/core';
import { Observable, from, fromEvent } from 'rxjs';

@Component({
  selector: 'app-observable-compo',
  templateUrl: './observable-compo.component.html',
  styleUrls: ['./observable-compo.component.scss']
})
export class ObservableCompoComponent implements OnInit, AfterContentInit {

  ngOnInit(): void { }

  ngAfterContentInit(): void { }


  /**
   * create Array and Promises & convert into Observable
   * ============================================================================================================
   */
  // postArray = [
  //   { title: 'batmen', description: 'batmen description' },
  //   { title: 'supermen', description: 'supermen description' },
  //   { title: 'ironmen', description: 'ironmen description' },
  // ];

  /**
   * convert Array to Observables
   * @param postArray
   */
  // postArrayObservable$ = from(this.postArray);

  /**
   * create promise and set setTimeOut to send data in 3 second
   * @label setTimeout
   */
  // promise = new Promise((resolve, reject) => {
  //   setTimeout(() => {
  //     resolve('Resolve the promise. sending data!')
  //   }, 3000)
  // })


  /**
   * convert Promise to Observables
   * @param Promise
   */
  // PromiseObservable$ = from(this.promise);


  // constructor() {
  //   /*--- call method for Observable ---*/
  //   this.postArrayObservable$.subscribe({
  //     next: (data) => console.log(data),
  //     error: (err) => console.log(err),
  //     complete: () => console.log('Complete Done!'),
  //   });

  //   /*--- call method for promise ---*/
  //   this.PromiseObservable$.subscribe({
  //     next: (data) => console.log(data),
  //     error: (err) => console.log(err),
  //     complete: () => console.log('Complete Done!'),
  //   });
  // }

  // ngOnInit(): void {
  // }

  // ngAfterContentInit() {
  //   /*------------ DOM Event Handler convert to observable ----------*/
  //   fromEvent(document.getElementById('click-button')!, 'click').subscribe({
  //     next: (data) => console.log(data),
  //     error: (err) => console.log(err),
  //     complete: () => console.log('Complete Done!'),
  //   });
  // }





  /**
   * create uni-cast Observable (assign separate observer(producer)) but can be multi-casted too
   * ============================================================================================================
   */

  // ngOnInit(): void {
  //   this.unsubu();
  // }

  // ngAfterContentInit(): void { }

  // /*-- create observable --*/
  // obs = new Observable((observer) => {
  //   let counter = 1;
  //   const producer = setInterval(() => {
  //     observer.next(counter++);

  //     /*-- custom error --*/
  //     if (counter > 5) {
  //       observer.error("oops! something wrong");
  //       /*--- or ---*/
  //       observer.complete();
  //     }

  //   }, 1000);

  //   return () => {
  //     /*-- complete clear the producer --*/
  //     console.warn("unsubscribe done..!")
  //     clearInterval(producer);
  //   }
  // });

  // /*-- subscribe this observable 1 --*/
  // sub1 = this.obs.subscribe({
  //   next: (data: any) => console.log("obs1", data),
  //   error: (err: any) => console.error(err),
  //   complete: () => console.log('obs1 Complete Done!'),
  // });

  // /*-- subscribe this observable 2 --*/
  // sub2 = this.obs.subscribe({
  //   next: (data: any) => console.log("obs2", data),
  //   error: (err: any) => console.error(err),
  //   complete: () => console.log('obs2 Complete Done!'),
  // });



  // /*-- unsubscribe observable --*/
  // unsubu() {
  //   setTimeout(() => {
  //     this.sub1.unsubscribe();
  //     this.sub2.unsubscribe();
  //   }, 5000);
  // }




}



