import { Component, OnInit } from '@angular/core';
import { interval, map, merge, take } from 'rxjs';
import { UtilityOperatorService } from 'src/app/services/utility-operator.service';

@Component({
  selector: 'app-merge',
  templateUrl: './merge.component.html',
  styleUrls: ['./merge.component.scss']
})
export class MergeComponent implements OnInit {

  constructor(private _du: UtilityOperatorService) { }

  ngOnInit(): void { }

  subscribeBtn: boolean = false;
  example1() {
    const sourceTech = interval(3000).pipe(map(v1 => 'Tech Video : ' + (v1 + 1)), take(5));
    const sourceComedy = interval(6000).pipe(map(v2 => 'Comedy Video : ' + (v2 + 1)), take(3));
    const sourceNews = interval(3500).pipe(map(v3 => 'News Video : ' + (v3 + 1)), take(4));

    const result = merge(sourceTech, sourceComedy, sourceNews);

    result.subscribe(res => {
      this._du.printLi(res, 'el-container');
    });
  }

}
