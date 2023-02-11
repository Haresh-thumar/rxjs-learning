import { AsyncAwaitFetchApiService } from './../services/async-await-fetch-api.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-async-await',
  templateUrl: './async-await.component.html',
  styleUrls: ['./async-await.component.scss']
})
export class AsyncAwaitComponent implements OnInit {

  constructor(private Api: AsyncAwaitFetchApiService) { }

  ngOnInit(): void {
    /*--- Async ---*/
    this.callFunction();

    /*--- Await ---*/
    this.getPromiseData();

    /*--- Fetch Api From Service ---*/
    this.getDataFromApi();
  }

  /*************************************************************************************
                                        Async-Await
  *************************************************************************************/

  /*----------------- Async -----------------*/
  async getData() {
    return 'Data Received From Async';
  }

  callFunction() {
    this.getData().then(data => console.warn(data));
  }


  /*---------------- Await ------------------*/
  promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('Data Received From Await');
    }, 3000);
  });
  async getPromiseData() {
    let response = await this.promise;
  }


  /*************************************************************************************
                                        with Promise
  *************************************************************************************/
  result1: string = 'Data';

  dell1 = {
    brand: 'Dell',
    hardDisk: '2 TB',
    color: 'Black',
  };
  buyLaptop1 = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(this.dell1);
    }, 3000);
  });
  fetch1() {
    this.result1 = 'Fetching Data';
    this.buyLaptop1.then(res => {
      this.result1 = JSON.stringify(res);
    });
  }


  /*************************************************************************************
                                    With Async/Await
  *************************************************************************************/
  result2: string = 'Data';

  dell2 = {
    brand: 'Dell',
    hardDisk: '2 TB',
    color: 'Black',
  };
  buyLaptop2 = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(this.dell2);
    }, 3000);
  });
  async fetch2() {
    this.result2 = 'Fetching Data';
    let data = await this.buyLaptop2;
    this.result2 = JSON.stringify(data);
  }


  /*************************************************************************************
                                  With Async/Await
  *************************************************************************************/
  result3: any[] = ['Data'];

  buyLaptop4: any[] = [];

  getDataFromApi() {
    this.Api.getData().subscribe({
      next: (res) => {
        this.buyLaptop4.push(res);
      },
      error: (err) => {
        console.error("loss data");
      },
      complete: () => {
        alert("Data Collect");
      }
    });
  }

  buyLaptop5 = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(this.buyLaptop4);
    }, 10000);
  });

  async fetch3() {
    this.result3 = ['Fetching Data...'];
    let data = await this.buyLaptop5;
    this.result3 = [];
    this.result3.push(JSON.stringify(data));
    alert("Data Received SuccessFully...!");
  }




}
