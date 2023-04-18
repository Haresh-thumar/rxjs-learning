import { Component, OnInit } from '@angular/core';
import { Subscription, interval } from 'rxjs';
import { DesignUtilityService } from 'src/app/services/design-utility.service';

@Component({
  selector: 'app-async-subject',
  templateUrl: './async-subject.component.html',
  styleUrls: ['./async-subject.component.scss']
})
export class AsyncSubjectComponent implements OnInit {

  constructor(private _du: DesignUtilityService) { console.clear(); }

  ngOnInit(): void {
    this.asyncSubscribe();
  }

  /*-------------------------------------------------------------------------------------------
                                            Example-1
  -------------------------------------------------------------------------------------------*/
  asyncDataValue: any;
  // Add value in asyncSubject
  onVideoAdd(video: any) {
    console.log(video);
    this._du.asyncVideoEmit.next(video);
  }

  // Subscribe the AsyncSubject
  asyncSubscribe() {
    this._du.asyncVideoEmit.subscribe(res => {
      this.asyncDataValue = res;
    });
  }

  // Data Collect after Subscription is Complete
  onComplete() {
    this._du.asyncVideoEmit.complete();
  }


}
