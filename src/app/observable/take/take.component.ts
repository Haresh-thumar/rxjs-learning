import { UtilityOperatorService } from './../../services/utility-operator.service';
import { interval, map, take, takeLast, takeUntil, timer, fromEvent, from } from 'rxjs';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-take',
  templateUrl: './take.component.html',
  styleUrls: ['./take.component.scss']
})
export class TakeComponent implements OnInit {

  randomNames = ['Davies', 'Evans', 'Thomas', 'Adams', 'Walker', 'Martin', 'Lewis', 'Smith'];

  constructor(private _di: UtilityOperatorService) { }

  ngOnInit(): void {
    /*--------------------------------------------------------------
                                Take
    --------------------------------------------------------------*/
    // Example - 1
    const source = interval(1000).pipe(take(5));
    source.subscribe(res => {
      this._di.printLi(res, 'elContainer');
    });

    // Example - 2
    const randomsource = from(this.randomNames).pipe(take(5));
    randomsource.subscribe(res => {
      this._di.printLi(res, 'elContainer2');
    });

    /*--------------------------------------------------------------
                              Take-Last
    --------------------------------------------------------------*/
    // Example - 1
    const randomsource2 = from(this.randomNames).pipe(takeLast(5));
    randomsource2.subscribe(res => {
      this._di.printLi(res, 'elContainer3');
    });

    /*--------------------------------------------------------------
                              Take-Until
    --------------------------------------------------------------*/
    // Example - 1
    const randomsource3 = interval(1000);
    let condition1 = timer(5000);
    randomsource3.pipe(
      map(data => 'Number ' + data),
      takeUntil(condition1)
    ).subscribe(res => {
      this._di.printLi(res, 'elContainer4');
    });

    // Example - 2
    const randomsource4 = interval(1000);
    let condition2 = fromEvent(document, 'click');
    randomsource4.pipe(
      map(data => 'Number ' + data),
      takeUntil(condition2)
    ).subscribe(res => {
      this._di.printLi(res, 'elContainer5');
    });
  }

}
