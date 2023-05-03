import { Component, OnInit, ViewChild, AfterViewInit, ElementRef } from '@angular/core';
import { FormControl, FormGroup, NgForm } from '@angular/forms';

@Component({
  selector: 'app-switch-map',
  templateUrl: './switch-map.component.html',
  styleUrls: ['./switch-map.component.scss']
})
export class SwitchMapComponent implements OnInit, AfterViewInit {

  @ViewChild('searchForm') searchForm?: NgForm;

  constructor() { }

  ngOnInit(): void { }

  ngAfterViewInit(): void {
    const formValue = this.searchForm?.valueChanges;
    formValue?.subscribe(res => {
      console.log(res);
    });
  }

  // onSubmit(event: any) {
  //   console.log(event.target.value);
  // }



}
