import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { fromEvent } from 'rxjs';
import { FromEventService } from 'src/app/services/from-event.service';

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

  constructor(private fromeve: FromEventService) { }

  ngOnInit(): void { }

  ngAfterViewInit(): void {
    let count = 1;
    fromEvent(this.addList.nativeElement, 'click').subscribe(res => {
      let countVal = 'Video ' + count++;
      this.fromeve.printLi(countVal, 'elContainer');
      this.fromeve.printLi(countVal, 'elContainer2');
    });
  }

}
