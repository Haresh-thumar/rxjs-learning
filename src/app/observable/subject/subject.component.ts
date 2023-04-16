import { DesignUtilityService } from './../../services/design-utility.service';
import { Component, OnInit } from '@angular/core';
import { Subject, from, multicast } from 'rxjs';

@Component({
  selector: 'app-subject',
  templateUrl: './subject.component.html',
  styleUrls: ['./subject.component.scss']
})
export class SubjectComponent implements OnInit {

  constructor(private _designUtility: DesignUtilityService) { }

  /*------------------------------------*/
  ngOnInit(): void {
    this.createSimpleSubject();
    this.crossCompoCommuni();
  }

  ngOnDestroy(): void {
    this._designUtility.crossCompoCommunication.next('');
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
    subject.error('Observer Error');
    subject.complete();
    subject.next(2);
  }

  /*--------- Cross Component Communication Using Subject -----------*/
  crossCompoCommuni() {
    this._designUtility.crossCompoCommunication.next('Subject Data');
  }

}
