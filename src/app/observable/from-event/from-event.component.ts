import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { fromEvent } from 'rxjs';
import { UtilityOperatorService } from 'src/app/services/utility-operator.service';

@Component({
  selector: 'app-from-event',
  templateUrl: './from-event.component.html',
  styleUrls: ['./from-event.component.scss']
})
export class FromEventComponent implements OnInit, AfterViewInit {

  /**
   * viewChild Decorator only work in ngAfterViewInit life-cycle hook
   */
  @ViewChild('addList') addList!: ElementRef;

  constructor(private _utilityFunc: UtilityOperatorService) { }

  ngOnInit(): void { }

  ngAfterViewInit(): void {
    let count = 1;
    fromEvent(this.addList.nativeElement, 'click').subscribe(res => {
      let countVal = 'Video ' + count++;
      this._utilityFunc.printLi(countVal, 'elContainer');
      this._utilityFunc.printLi(countVal, 'elContainer2');
    });
  }

}
