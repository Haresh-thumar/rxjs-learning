import { Injectable } from '@angular/core';
import { BehaviorSubject, ReplaySubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DesignUtilityService {

  /*------- Subject -------*/
  exclusive = new Subject<boolean>();

  /*------- Subject --------*/
  subjectValue = new Subject<string>();

  /*------- Behivour-Subject --------*/
  BehivourSubjectValue = new BehaviorSubject<string>('123');


  /*------- Cross Component Communication Subject -------*/
  crossCompoCommunication = new Subject<string>();


  /*------- Reply-Subject For Global Declaration -------*/
  videoEmit = new ReplaySubject<string>(5);
  videoEmit2 = new ReplaySubject<string>(3, 5000); // before emit data receive after 5 second complete in user 3.

  constructor() { }
}
