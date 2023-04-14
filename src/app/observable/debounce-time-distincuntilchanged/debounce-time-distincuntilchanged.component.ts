import { Component, OnInit, ElementRef, ViewChild, AfterViewInit } from '@angular/core';
import { NgxUiLoaderService } from 'ngx-ui-loader';
import { debounceTime, distinctUntilChanged, from, fromEvent, map } from 'rxjs';

@Component({
  selector: 'app-debounce-time-distincuntilchanged',
  templateUrl: './debounce-time-distincuntilchanged.component.html',
  styleUrls: ['./debounce-time-distincuntilchanged.component.scss']
})
export class DebounceTimeDistincuntilchangedComponent implements OnInit, AfterViewInit {

  @ViewChild('myInput') myInput?: ElementRef;
  @ViewChild('myInput2') myInput2?: ElementRef;

  requestedData?: null;
  requestedData2?: null;

  constructor(private loader: NgxUiLoaderService) { }

  ngOnInit(): void { }

  ngAfterViewInit() {
    /*-------- debounceTime ----------------*/
    this.debounceTimeMethod();
    /*-------- distincUntilChanged ---------*/
    this.distincUntilChangedMethod();
    this.distincUntilChangedExample();
  }

  /*=========================== debounceTime ===========================*/
  debounceTimeMethod() {
    const searchTerm = fromEvent<any>(this.myInput?.nativeElement, 'keyup').pipe(
      map(event => event.target.value),
      debounceTime(1000)
    );
    searchTerm.subscribe(res => {
      console.log(res);
      this.requestedData = res;
      this.loader.start();
      setTimeout(() => {
        this.requestedData = null;
        this.loader.stop();
      }, 1000);
    });
  }


  /*=========================== distincUntilChanged ===========================*/
  /*---------- Example-1 ----------*/
  distincUntilChangedMethod() {
    const searchTerm = fromEvent<any>(this.myInput2?.nativeElement, 'keyup').pipe(
      map(event => event.target.value),
      distinctUntilChanged()
    );
    searchTerm.subscribe(res => {
      console.log(res);
      this.requestedData2 = res;
      this.loader.start();
      setTimeout(() => {
        this.requestedData2 = null;
        this.loader.stop();
      }, 1000);
    });
  }

  /*---------- Example-2 ----------*/
  source$: any[] = [
    { name: 'Brian' },
    { name: 'Joe' },
    { name: 'Joe' },
    { name: 'Brian' },
    { name: 'Sue' }
  ];
  distincUntilChangedExample() {
    const source$ = from(this.source$);
    source$.pipe(distinctUntilChanged((prev, curr) => prev.name === curr.name)).subscribe(console.log);
  }


}
