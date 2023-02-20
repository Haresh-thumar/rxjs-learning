import { Component, OnInit } from '@angular/core';
import { UtilityOperatorService } from '../../services/utility-operator.service';
import { Observable, from, of } from 'rxjs';

@Component({
  selector: 'app-of-from',
  templateUrl: './of-from.component.html',
  styleUrls: ['./of-from.component.scss']
})
export class OfFromComponent implements OnInit {

  constructor(private _utilityLiService: UtilityOperatorService) { }

  /*------ of() ------*/
  obsMsg1: any;
  /*------ from() ------*/
  obsMsg2: any;


  ngOnInit(): void {
    /*---------------------------------------------------------------------
                                    of()
    ---------------------------------------------------------------------*/
    /*---- Array to convert Observable -----*/
    const obsof1 = of('Anup', 'Shekhar', 'Sharma');
    obsof1.subscribe(res => {
      this._utilityLiService.printLi(res, 'elContainer');
    });

    /*---- Object to convert Observable -----*/
    const obsof2 = of({ a: 'Anup', b: 'Shekhar', c: 'Sharma' });
    obsof2.subscribe(res => {
      this.obsMsg1 = res;
    });

    /*---- String to convert Observable -----*/
    const obsof3 = of("welcome");
    obsof3.subscribe(res => {
      this._utilityLiService.printLi(res, 'elContainer1');
    });

    /*---- Number to convert Observable -----*/
    const obsof4 = of(1, 2, 3, 4, 5);
    obsof4.subscribe(res => {
      this._utilityLiService.printLi(res, 'elContainer2');
    });

    /*---- Number, string & Array to convert Observable -----*/
    const obsof5 = of(100, [1, 2, 3, 4, 5, 6, 7], "Hello World");
    obsof5.subscribe(res => {
      this._utilityLiService.printLi(res, 'elContainer3');
    });

    /*---- Set to convert Observable -----*/
    const set = new Set();
    set.add(34);
    set.add(45);
    set.add(57);
    const obsof6 = of(set);
    obsof6.subscribe(res => {
      console.log('%c of Set ', 'background: #FFFF00; color: #000', res);
    });

    /*---- Map to convert Observable -----*/
    const map = new Map();
    map.set('name', 'ninja');
    map.set('user', 'Haresh');
    map.set('id', '45');
    const obsof7 = of(map);
    obsof7.subscribe(res => {
      console.log('%c of Map ', 'background: #ff7800; color: #000', res);
    });

    /*---- Proimise to convert Observable -----*/
    const pr = new Promise((resolve) => resolve('I am done with pr'));
    const obsof8 = of(pr);
    obsof8.subscribe((res: any) => {
      res.then(console.log('%c of Promise ', 'background: #33FF57; color: #000', res));
    });

    /*---- observable to convert Observable -----*/
    const of$ = of("nitish");
    const obsof9 = of(of$);
    obsof9.subscribe((res: any) => {
      res.subscribe((x: any) => {
        console.log('%c of Observable ', 'background: #ff7800; color: #000', x);
      });
    });

    /*---- HTMLCollection to convert Observable -----*/
    const liArr = document.getElementsByTagName('td');
    const obsof10 = of(liArr);
    obsof10.subscribe((res: any) => {
      Array.from(res).forEach((li: any) => {
        li.addEventListener('click', () => {
          console.log('%c of HTMLCollection ', 'background: #33FF57; color: #000', li.innerText);
        });
      });
    });

    /*---- Multiple Value to convert Observable -----*/
    const multipleVal = of(['rxjs', 'angular'], [12, 45, 55], [3, 6, true, 'name']);
    multipleVal.subscribe((res: any) => {
      console.log('%c of Multiple Value', 'background: #87CEEB; color: #000', res);
    });




    /*---------------------------------------------------------------------
                                    from()
    ---------------------------------------------------------------------*/
    /*---- string to convert Observable -----*/
    const obsfrom3 = from("welcome to RXJS");
    obsfrom3.subscribe(res => {
      this._utilityLiService.printLi(res, 'elContainer4');
    });

    /*---- Array to convert Observable -----*/
    let arr = ['Haresh', 'Parth', 'Rutvik'];
    const obsfrom1 = from(arr);
    obsfrom1.subscribe(res => {
      this._utilityLiService.printLi(res, 'elContainer5');
    });

    /*---- Promise to convert Observable -----*/
    const promise = new Promise(resolve => resolve('I Am Promise Resolved'));
    const obsfrom2 = from(promise);
    obsfrom2.subscribe(res => {
      this._utilityLiService.printLi(res, 'elContainer6');
    });

    /*---- Map to convert Observable -----*/
    let myMap = new Map();
    myMap.set(0, 'Hello');
    myMap.set(1, 'World');
    const obsfrom4 = from(myMap);
    obsfrom4.subscribe((res: any) => {
      console.log('%c from Map ', 'background: #FF0000; color: #fff', res);
    });

    /*---- Set to convert Observable -----*/
    let mySet = new Set();
    mySet.add('I');
    mySet.add('Love');
    mySet.add('Coding');
    const obsfrom5 = from(mySet);
    obsfrom5.subscribe(res => {
      console.log('%c from Set ', 'background: #FFFF00; color: #000', res);
    });

    /*---- Multiple Promises to convert Observable -----*/
    let multipr1 = new Promise(resolve => resolve('I Am Promise 1'));
    let multipr2 = new Promise(resolve => resolve('I Am Promise 2'));
    let multipr3 = new Promise(resolve => resolve('I Am Promise 3'));
    let prArr = [multipr1, multipr2, multipr3];
    const obsfrom6 = from(prArr);
    obsfrom6.subscribe((res: any) => {
      res.then(console.log('%c from Multiple Promises ', 'background: #33FF57; color: #000', res));
    });

    /*---- Iterable Object to convert Observable -----*/
    let obj = {
      '0': 111,
      '1': 'name',
      '2': 'pro',
      length: 3
    };
    const obsfrom7 = from(obj);
    obsfrom7.subscribe(res => {
      this.obsMsg2 = res;
      console.log('%c from Iterable Object ', 'background: #ff7800; color: #000', res);
    });

    /*---- HTMLCollection to convert Observable -----*/
    const liArr2 = document.getElementsByTagName('td');
    const obsfrom8 = from(liArr);
    obsfrom8.subscribe((res: any) => {
      console.log('%c from HTMLCollection ', 'background: #FFFF00; color: #000', res);
    });

  }



}
