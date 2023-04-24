import { Component, OnInit } from '@angular/core';
import { concatAll, concatMap, delay, from, map, mergeMap, of } from 'rxjs';
import { UtilityOperatorService } from 'src/app/services/utility-operator.service';

@Component({
  selector: 'app-concat-map',
  templateUrl: './concat-map.component.html',
  styleUrls: ['./concat-map.component.scss']
})
export class ConcatMapComponent implements OnInit {

  constructor(private _du: UtilityOperatorService) { console.clear(); }

  ngOnInit(): void {
    const source = from(['Tech', 'Comedy', 'News']);
    //---------- Map -----------
    source.pipe(map(res1 => this.getData(res1))).subscribe(res2 => res2.subscribe(res3 => {
      this._du.printLi(res3, 'elContainer1');
    }));
    //---------- Map + mergeMap -----------
    source.pipe(map(res4 => this.getData(res4)), concatAll()).subscribe(res5 => {
      this._du.printLi(res5, 'elContainer2');
    });
    //---------- ConcatMap -----------
    source.pipe(concatMap(res4 => this.getData(res4))).subscribe(res5 => {
      this._du.printLi(res5, 'elContainer3');
    });

    //---------- MergeMap -----------
    source.pipe(mergeMap(res4 => this.getData(res4))).subscribe(res5 => {
      this._du.printLi(res5, 'elContainer4');
    });

  }


  getData(data: any) {
    return of(data + 'Video Uploaded').pipe(delay(2000));
  }


}
