import { DesignUtilityService } from './../../services/design-utility.service';
import { Component, OnInit } from '@angular/core';
import { Observable, Subject, Subscription, from, interval, multicast } from 'rxjs';

@Component({
  selector: 'app-subject',
  templateUrl: './subject.component.html',
  styleUrls: ['./subject.component.scss']
})
export class SubjectComponent implements OnInit {


  constructor(private _designUtility: DesignUtilityService) {
    console.clear();
   }


  /*------------------ ngOnInit() ------------------*/
  ngOnInit(): void {
    // this.createSimpleSubject();
    this.crossCompoCommuni();
    // this.subjectObserver();
    // this.multicastUnicastObs();
  }



  /*--------- create Subject & Subscribe & Use Observer Next() Method -----------*/
  createSimpleSubject() {
    let subject = new Subject<number>();
    subject.subscribe({
      next: (v) => console.log(`observer Next: ${v}`),
      complete: () => console.log(`observer Complete`)
    });
    subject.subscribe({
      next: (v1) => console.log(`observer Next: ${v1}`),
      error: (err) => console.log(`observer Error: ${err}`),
    });
    subject.next(1);
    subject.complete();
    subject.error('Observer Error');
    subject.next(2);
  }



  /*--------- Cross Component Communication Using Subject -----------*/
  crossCompoCommuni() {
    this._designUtility.crossCompoCommunication.next('Subject Data');
  }



  /*------------ Every Subject is an Observer ------------*/
  subject$ = new Subject();
  observable = new Observable(observer => {
    observer.next("first");
    observer.next("second");
    observer.error("error");
  });
  subjectObserver() {
    this.subject$.subscribe(val => {
      console.log(val);
    });
    this.observable.subscribe(this.subject$);
  }



  /*------------ Multicast vs Unicast ------------*/
  observable$ = new Observable<number>(subscriber => {
    subscriber.next(Math.floor(Math.random() * 200) + 1);
  });
 
  subject1$ = new Subject();

  multicastUnicastObs(){
    this.observable$.subscribe(val => {
      console.log("Obs1 :" + val);
    });
    this.observable$.subscribe(val => {
      console.log("Obs2 :" + val);
    });
 
    this.subject$.subscribe(val => {
      console.log("Sub1 " + val);
    });
    this.subject$.subscribe(val => {
      console.log("Sub2 " + val);
    });

    this.subject$.next(Math.floor(Math.random() * 200) + 1);
  }



  /*------------------- UnSubscribe Observable ----------------------*/
  src1 = interval(1000);
  src2 = interval(1500);
  src3 = interval(2000);
  id = new Date().toDateString();
  obs1?: Subscription;
  obs2?: Subscription;
  obs3?: Subscription;
  
  unSubscribeObs(){
    console.log("Component Created " + this.id);

    this.obs1 = this.src1.subscribe(value => {
      console.log("Src1 " + this.id);
    });
 
    this.obs2 = this.src2.subscribe(value => {
      console.log("Src2 " + this.id);
    });
 
    this.obs3 = this.src3.subscribe(value => {
      console.log("Src3 " + this.id);
    });
  }

  unsubObs(){
    this.obs1?.unsubscribe();
    this.obs2?.unsubscribe();
    this.obs3?.unsubscribe();
    console.warn('Subject Component Destroyed')
  }


  /*------------------ ngOnDestroy() ------------------*/
  ngOnDestroy(): void {
    this._designUtility.crossCompoCommunication.next('');
  }

}
