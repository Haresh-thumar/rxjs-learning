import { Component, OnInit } from '@angular/core';
import { concat, interval, map, take } from 'rxjs';
import { DesignUtilityService } from 'src/app/services/design-utility.service';
import { UtilityOperatorService } from 'src/app/services/utility-operator.service';

@Component({
  selector: 'app-concat',
  templateUrl: './concat.component.html',
  styleUrls: ['./concat.component.scss']
})
export class ConcatComponent implements OnInit {

  constructor(private _du: UtilityOperatorService) { }

  ngOnInit(): void { }

  subscribeBtn: boolean = false;
  example1() {
    const sourceTech = interval(1000).pipe(map(v1 => 'Tech Video : ' + (v1 + 1)), take(5));
    const sourceComedy = interval(2000).pipe(map(v2 => 'Comedy Video : ' + (v2 + 1)), take(3));
    const sourceNews = interval(500).pipe(map(v3 => 'News Video : ' + (v3 + 1)), take(4));

    const result = concat(sourceTech, sourceComedy, sourceNews);

    result.subscribe(res => {
      this._du.printLi(res, 'el-container');
    });
  }

}
