import { UtilityOperatorService } from 'src/app/services/utility-operator.service';
import { interval, map, Subscription, tap } from 'rxjs';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tap',
  templateUrl: './tap.component.html',
  styleUrls: ['./tap.component.scss']
})
export class TapComponent implements OnInit {

  sourceSubscription!: Subscription;
  sourceSubscription2!: Subscription;
  myColor: string = '';
  myBg: string = '';

  constructor(private _DI: UtilityOperatorService) { }

  ngOnInit(): void {
    /*--------------------------------------------------------------------------------------
                                        Example - 1
    --------------------------------------------------------------------------------------*/
    const arr = ['Anup', 'Shekhar', 'Sharma', 'UxTrends', 'John', 'Alex', 'Ronbert'];
    const source = interval(1500);
    this.sourceSubscription = source.pipe(
      tap(item => {
        if (item == 4) {
          this.sourceSubscription.unsubscribe();
        }
      }), map(data => arr[data])
    ).subscribe(res => {
      this._DI.printLi(res, 'elContainer');
    });

    /*--------------------------------------------------------------------------------------
                                        Example - 2
    --------------------------------------------------------------------------------------*/
    const colors: any = ['red', 'yellow', 'blue', 'green', 'orange', 'purple', 'teal'];
    const backgrounds: any = ['#F7A4A4', '#FFE15D', '#B6E2A1', '#ABC9FF', '#F94892', '#9DDAC6', '#D99879'];
    const source2 = interval(1500);
    this.sourceSubscription2 = source2.pipe(
      tap(item => {
        this.myColor = colors[item];
        this.myBg = backgrounds[item];
        if (item == 7) {
          this.sourceSubscription2.unsubscribe();
        }
      }), map(data => colors[data])
    ).subscribe(res => {
      this._DI.printLi(res, 'elContainer2');
    });


  }

}
