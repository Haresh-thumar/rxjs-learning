import { Component, OnInit } from '@angular/core';
import { UtilityOperatorService } from '../../services/utility-operator.service';
import { of } from 'rxjs';

@Component({
  selector: 'app-of-from',
  templateUrl: './of-from.component.html',
  styleUrls: ['./of-from.component.scss']
})
export class OfFromComponent implements OnInit {

  obsMsg: any;

  constructor(private _utilityLiService: UtilityOperatorService) { }

  ngOnInit(): void {

    /*---- of() (example-1)-----*/
    const obs1 = of('Anup', 'Shekhar', 'Sharma');
    obs1.subscribe(res => {
      this._utilityLiService.printLi(res, 'elContainer');
    });

    /*---- of() (example-2)-----*/
    const obs2 = of({ a: 'Anup', b: 'Shekhar', c: 'Sharma' });
    obs2.subscribe(res => {
      this.obsMsg = res;
      console.log(res);
    });



  }

}
