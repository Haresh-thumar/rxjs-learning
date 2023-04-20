import { Component, OnInit } from '@angular/core';
import { from, map, mergeAll, mergeMap, of } from 'rxjs';
import { UtilityOperatorService } from 'src/app/services/utility-operator.service';

@Component({
  selector: 'app-merge-map',
  templateUrl: './merge-map.component.html',
  styleUrls: ['./merge-map.component.scss']
})
export class MergeMapComponent implements OnInit {

  constructor(private _du: UtilityOperatorService) { console.clear(); }


  ngOnInit(): void {
    const source = from(['Tech', 'Comedy', 'News']);
    //---------- Map -----------
    source.pipe(map(res1 => this.getData(res1))).subscribe(res2 => res2.subscribe(res3 => {
      this._du.printLi(res3, 'elContainer1');
    }));
    //---------- Map + MergeAll -----------
    source.pipe(map(res4 => this.getData(res4)), mergeAll()).subscribe(res5 => {
      this._du.printLi(res5, 'elContainer2');
    });
    //---------- MergeMap -----------
    source.pipe(mergeMap(res4 => this.getData(res4))).subscribe(res5 => {
      this._du.printLi(res5, 'elContainer3');
    });
  }


  getData(data: any) {
    return of(data + 'Video Uploaded');
  }


}
