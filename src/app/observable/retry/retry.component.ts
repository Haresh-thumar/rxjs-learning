import { HttpClient } from '@angular/common/http';
import { UtilityOperatorService } from './../../services/utility-operator.service';
import { Component, OnInit } from '@angular/core';
import { delay, retry, retryWhen, scan } from 'rxjs';

@Component({
  selector: 'app-retry',
  templateUrl: './retry.component.html',
  styleUrls: ['./retry.component.scss']
})
export class RetryComponent implements OnInit {

  constructor(private _du: UtilityOperatorService, private http: HttpClient) { }

  dataAry: any;
  fetchingData: boolean = false;
  status: string = 'No Data';

  ngOnInit(): void { }



  /*--------------------------------------------------------------
                  Retry, RetryWhen, Scan & Delay
  --------------------------------------------------------------*/
  getAlbums() {
    this.fetchingData = true;
    this.status = 'Fetching Data...';
    return this.http.get('https://jsonplaceholder.typicode.com/albums').pipe(
      // retry(4)
      retryWhen(err => err.pipe(
        delay(3000),
        scan((retryCount) => {
          if (retryCount >= 5) {
            throw err;
          } else {
            retryCount = retryCount + 1;
            this.status = 'Retrying Attemp #' + retryCount;
            console.log('retryCount => ', retryCount);
            return retryCount;
          }
        }, 0)
      ))
    ).subscribe(
      (res) => {
        console.log(res);
        this.dataAry = res;
        this.fetchingData = false;
        this.status = 'Data Fetching SuccessFully';
      },
      (err) => {
        console.log(err);
        this.fetchingData = false;
        this.status = 'Data Fetching Problem';
      }
    );
  }



}
