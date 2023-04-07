import { Component, OnInit, ElementRef, ViewChild, AfterViewInit } from '@angular/core';
import { debounceTime, fromEvent, map } from 'rxjs';

@Component({
  selector: 'app-debounce-time-distincuntilchanged',
  templateUrl: './debounce-time-distincuntilchanged.component.html',
  styleUrls: ['./debounce-time-distincuntilchanged.component.scss']
})
export class DebounceTimeDistincuntilchangedComponent implements OnInit, AfterViewInit {

  @ViewChild('myInput') myInput?: ElementRef;

  requestedData?: null;

  constructor() { }

  ngOnInit(): void {

  }

  ngAfterViewInit() {
    const searchTerm = fromEvent<any>(this.myInput?.nativeElement, 'keyup').pipe(
      map(event => event.target.value),
      debounceTime(1000)
    );
    searchTerm.subscribe(res => {
      console.log(res);
      this.requestedData = res;
      setTimeout(() => {
        this.requestedData = null;
      }, 2000);
    });
  }
}
