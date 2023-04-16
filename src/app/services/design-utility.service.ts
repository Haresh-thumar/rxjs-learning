import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';

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

  constructor() { }
}
