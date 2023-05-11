import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { map } from 'rxjs';

@Component({
  selector: 'app-switch-map',
  templateUrl: './switch-map.component.html',
  styleUrls: ['./switch-map.component.scss']
})
export class SwitchMapComponent implements AfterViewInit {

  @ViewChild('searchForm') searchForm!: NgForm;

  constructor() { }

  ngAfterViewInit() {
    const formValue = this.searchForm.valueChanges;
    formValue?.pipe(
      map((data: any) => data.searchterm)
      ).subscribe((res:any) => {
      console.log(res);
    })
  }



};
