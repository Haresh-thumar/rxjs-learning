import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-promise',
  templateUrl: './promise.component.html',
  styleUrls: ['./promise.component.scss']
})
export class PromiseComponent implements OnInit {

  /*---- Promise Value Assign in This Variable ----*/
  promiseAvailValue: any = {};
  promiseNotAvailValue: any = {};
  /*---- Text Color Change For Body ----*/
  promiseValueColor!: boolean;

  dell = {
    brand: 'Dell',
    hardDisk: '2 TB',
    color: 'Black'
  };

  hp = {
    brand: 'Hp',
    hardDisk: '1 TB',
    color: 'silver'
  };

  notAvail = {
    brand: 'Not Available',
    status: 'Failed'
  };

  dellAvailable() {
    return false;
  }

  hpAvailable() {
    return true;
  }

  constructor() { }

  ngOnInit(): void {
    /*----- Create New Promise ------*/
    let buyLaptop = new Promise((resolve, reject) => {
      // resolve('promise is resolved');
      // reject('promise is rejected');

      /*----- Promise With Condition -----*/
      if (this.dellAvailable()) {
        setTimeout(() => {
          // resolve('Dell is Purchased');
          resolve(this.dell);
        }, 3000);
      } else if (this.hpAvailable()) {
        setTimeout(() => {
          // resolve('Hp is Purchased');
          resolve(this.hp);
        }, 3000);
      } else {
        setTimeout(() => {
          // reject('Laptop is not Available on Store');
          reject(this.notAvail);
        }, 3000);
      }

    });

    /*----- Use this Promise ------*/
    buyLaptop.then(res => {
      console.clear();
      this.promiseAvailValue = res;
      this.promiseValueColor = true;
      console.log('then code =>', res);
    }).catch(res => {
      console.clear();
      this.promiseNotAvailValue = res;
      this.promiseValueColor = false;
      console.log('catch code =>', res);
    });
  }



  /*------- Definite (self dependent) -------*/
  myFunction() {
    console.log('myFunction Called');
  }

}
