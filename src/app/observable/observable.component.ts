import { AfterContentInit, Component, OnDestroy, OnInit } from '@angular/core';
import { Observable, from, fromEvent } from 'rxjs';

@Component({
  selector: 'app-observable',
  templateUrl: './observable.component.html',
  styleUrls: ['./observable.component.scss']
})
export class ObservableComponent implements OnInit, AfterContentInit {

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




  /**
 * @lable Craeate uni-cast Observable using JS
 * ****************************************************************************************************************************************
 */

  // function observable(observer) {
  /*-- Producer(observer) --*/
  // let counter = 1;

  // const producer = setInterval(() => {
  //     observer.next(counter++);
  // }, 1000);

  /*-- unSubscribe / tearDown / close --*/
  // return () => {
  //     clearInterval(producer);
  // }
  // }


  /*-- Declere observable function (Method-1) --*/
  // const closeFn1 = observable({
  //     next: (res) => console.log('obs1', res),
  //     error: (err) => console.log('obs1 error', err),
  //     complete: () => console.log('obs1 done'),
  // });

  /*-- Clear observable after 5 second using setTimeOut() --*/
  // setTimeout(() => {
  //     closeFn1();
  // }, 5000);


  /*-- close observable function (Method-2) --*/
  // setTimeout(() => {
  //     const closeFn2 = observable({
  //         next: (res) => console.log('obs2', res),
  //         error: (err) => console.log('obs2 error', err),
  //         complete: () => console.log('obs2 done'),
  //     });
  // }, 6000);





  /**
   * @lable Create Observable using class & blueprint
   * ****************************************************************************************************************************************
   */

  // class Observable {
  //     constructor(blueprint) {
  //         this.observable = blueprint;
  //     }
  //     subscribe(observer) {
  //         const closeFn = this.observable(observer);
  //         return closeFn;
  //     }
  // }

  // const obs = new Observable(function (observer) {
  //     /*-- Producer(observer) --*/
  //     observer.next("hello world");
  //     observer.error("error");
  //     observer.complete();

  //     /*-- unSubscribe / tearDown / close --*/
  //     return () => {
  //         clearInterval(producer);
  //     }
  // });

  // /*-- Declere observable function --*/
  // const unsubscribe = obs.subscribe({
  //     next: (res) => console.log(res),
  //     error: (err) => console.log(err),
  //     complete: () => console.log('done'),
  // });



  /**
   * @lable how to make observer in safe mechanism.
   * (stream once time complete then next, error, complete method not call on subscribe. (observable restrict this cheese pattern)).
   * ****************************************************************************************************************************************
   */

  /*----- Create Observer Guard -----*/
  // class ObserverGuard {
  //     constructor(observer) {
  //         this.observer = observer;
  //         this.isUnsubscribed = false;
  //     }

  //     next(data) {
  //         if (this.isUnsubscribed || !this.observer.next) {
  //             return;
  //         }
  //         try {
  //             this.observer.next(data);
  //         } catch (err) {
  //             this.unsubscribe();
  //             throw err;
  //         }
  //     }

  //     error(err) {
  //         if (this.isUnsubscribed || !this.observer.error) {
  //             return;
  //         }
  //         try {
  //             this.observer.error(err);
  //         } catch (innerError) {
  //             this.unsubscribe();
  //             throw innerError;
  //         }
  //         this.unsubscribe();
  //     }

  //     complete() {
  //         if (this.isUnsubscribed || !this.observer.complete) {
  //             return;
  //         }
  //         try {
  //             this.observer.complete(err);
  //         } catch (err) {
  //             this.unsubscribe();
  //             throw err;
  //         }
  //         this.unsubscribe();
  //     }

  //     unsubscribe() {
  //         this.isUnsubscribed = true;
  //         if (this.closeFn) {
  //             this.closeFn();
  //         }
  //     }

  //     closed() {
  //         return this.isUnsubscribed;
  //     }
  // }

  /*----- Create Observable -----*/
  // class Observable {
  //     constructor(blueprint) {
  //         this.observable = blueprint;
  //     }
  //     subscribe(observer) {
  //         const observerWithGuard = new ObserverGuard(observer);
  //         const closeFn = this.observable(observerWithGuard);
  //         observerWithGuard.closeFn = closeFn;
  //         const subscription = this.subscriptionMetaData(observerWithGuard);
  //         return subscription;
  //     }

  //     subscriptionMetaData(observerWithGuard) {
  //         return {
  //             unsubscribe() {
  //                 observerWithGuard.unsubscribe();
  //             },
  //             get closed() {
  //                 return observerWithGuard.closed();
  //             },
  //         };
  //     }
  // }

  // const obs = new Observable(function (observer) {
  //     /*-- Producer(observer) --*/
  //     let counter = 1;

  //     const producer = setInterval(() => {
  //         observer.next(counter++);

  //         /*-- custom error --*/
  //         // if (counter > 5) {
  //         //     console.log("yep error");
  //         //     observer.complete();
  //         // }
  //     }, 1000);

  //     /*-- unSubscribe / tearDown / close --*/
  //     return () => {
  //         clearInterval(producer);
  //     }
  // });

  // /*-- Declare observable function --*/
  // const subscription1 = obs.subscribe({
  //     next: (res) => console.log("obs", res),
  //     error: (err) => console.log("obs", err),
  //     complete: () => console.log('done'),
  // });


  // setTimeout(() => {
  //     /*-- subscription unsubscribe --*/
  //     subscription1.unsubscribe();
  //     /*-- subscription closed --*/
  //     console.log(subscription1.closed);
  // }, 5000);




  /**
   * create new Observable using constructure pattern(static method)
   *******************************************************************************
   */

  // const obs = new Observable((observer) => {
  //   let counter = 0;
  //   const producer = setInterval(() => {
  //     observer.next(counter++);
  //   }, 1000);

  //   return () => {
  //     clearInterval(producer);
  //   };
  // });

  /*---- subscribe this observable ----*/
  // const sub = obs.subscribe({
  //   next: (data) => console.log(data),
  //   error: (err) => console.log(err),
  //   complete: () => console.log("obs done"),
  // });

  /*---- Subscribe this Observable ----*/
  // setTimeout(() => {
  //   sub.unsubscribe();
  // }, 5000);




}



