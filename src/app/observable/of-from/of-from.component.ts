import { Component, OnInit } from '@angular/core';
import { UtilityOperatorService } from '../../services/utility-operator.service';
import { Observable, count, from, of } from 'rxjs';

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

    /*---- Iterate Object and convert to Observable ----*/
    const obj6: any = {
      id: 1,
      name: 'haresh',
      work: 'coding',
      place: 'HYD'
    };
    let populationArr1 = Object.entries(obj6);
    const obsfrom8 = from(populationArr1);
    obsfrom8.subscribe((res: any) => {
      res.flatMap((num: any) => {
        console.log('%c from Iterate Object ', 'background: #87CEEB; color: #000', num);
      });
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
    const obsfrom9 = from(liArr);
    obsfrom9.subscribe((res: any) => {
      console.log('%c from HTMLCollection ', 'background: #FFFF00; color: #000', res);
    });

    /*---- Generator to convert Observable -----*/
    function* range(start: number, end: number) {
      for (let i = start; i < end; i++) {
        yield i;
      }
    }
    const generator = from(range(1, 10));
    generator.subscribe(res => {
      console.log('%c from Generator ', 'background: #FF0000; color: #fff', res);
    });

    /*---- Observable to convert Observable -----*/
    const obs = of(12, 26, 34, 48);
    const obsrbl = from(obs);
    obsrbl.subscribe((res: any) => {
      console.log('%c from Observable ', 'background: #33FF57; color: #000', res);
    });














    /********************************************************************************************************************************
                                                      Objects Properties
     ********************************************************************************************************************************/
    /*-------------------------------------------------------*/
    const population: any = {
      male: 4,
      female: 93,
      others: 10
    };
    let populationArr = Object.entries(population);
    console.log(populationArr);   // 0:['male', 4] 1:['female', 93] 2:['others', 10]


    /*-------------------------------------------------------*/
    const population1: any = {
      male: 4,
      female: 93,
      others: 10
    };
    // Iterate through the object
    for (const key in population1) {
      if (population1.hasOwnProperty(key)) {
        console.log(`${key}: ${population1[key]}`);  // male: 4, female: 93, others: 10
      }
    }


    /*-------------------------------------------------------*/
    const population2: any = {
      male: 4,
      female: 93,
      others: 10
    };
    let genders = Object.keys(population2);
    console.log(genders); // ["male","female","others"]


    /*-------------------------------------------------------*/
    const population3: any = {
      male: 4,
      female: 93,
      others: 10
    };
    let genders1 = Object.keys(population3);
    genders1.forEach((gender) => {
      console.log(`There are ${population[gender]} ${gender}`);
      // There are 4 male
      // There are 93 female
      // There are 10 others
    });


    /*-------------------------------------------------------*/
    const population4 = {
      male: 4,
      female: 93,
      others: 10
    };
    let totalPopulation = 0;
    let genders2 = Object.keys(population4);
    genders2.forEach((gender) => {
      totalPopulation += population[gender];
    });
    console.log(totalPopulation); // 107


    /*-------------------------------------------------------*/
    const population5 = {
      male: 4,
      female: 93,
      others: 10
    };
    let numbers = Object.values(population5);
    console.log(numbers);   // [4,93,10]

    let numbers1 = Object.values(population);
    numbers1.forEach((number) => console.log(number)); // 4 93 10


    /*-------------------------------------------------------*/
    const obj2: any = { a: 1, b: 2, c: 3 };
    for (const prop in obj2) {
      console.log(`obj.${prop} = ${obj2[prop]}`);
      // obj.a = 1
      // obj.2 = 2
      // obj.3 = 3
    }


    /*-------------------------------------------------------*/
    const object1 = {
      a: 1,
      b: 2,
      c: 3
    };
    console.log(Object.getOwnPropertyNames(object1));
    // Expected output: Array ["a", "b", "c"]


    /*-------------------------------------------------------*/
    const obj4: any = { 0: "a", 1: "b", 2: "c" };
    Object.getOwnPropertyNames(obj4).forEach((val, idx, array) => {
      console.log(`${val} -> ${obj4[val]}`);
    });
    // 0 -> a
    // 1 -> b
    // 2 -> c


    /*-------------------------------------------------------*/
    const object2: any = {
      id: 1,
      name: 'haresh',
      work: 'coding',
      place: 'HYD'
    };

    for (let [key, value] of Object.entries(object2)) {
      // console.log(key, value);
      console.log(`key=${key} value=${value}`);
      // key=id value=1
      // key=name value=haresh
      // key=work value=coding
      // key=place value=HYD
    }


    /*-------------------------------------------------------*/
    const anObj = { 100: 'a', 2: 'b', 7: 'c' };
    Object.entries(anObj).map(obj => {
      const key = obj[0];
      const value = obj[1];
      console.log(key, value);   // 2 b   7 c   100 a
    });


    /*-------------------------------------------------------*/
    // Or, using array extras
    const anObj2 = { 50: 'aa', 22: 'bb', 77: 'cc' };
    Object.entries(anObj2).forEach(([key, value]) => {
      console.log(`${key} ${value}`);    // 22 bb    50 aa   77 cc
    });


    /*-------------------------------------------------------*/
    let obj5: any = {
      prop1: '1',
      prop2: '2'
    };
    for (let el in obj5) {
      console.log(el);
      console.log(obj5[el]);
      // prop1
      // 1
      // prop2
      // 2
    }


  }








}
