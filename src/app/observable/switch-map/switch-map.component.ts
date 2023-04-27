import { Component, OnInit, ViewChild, AfterViewInit, ElementRef } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-switch-map',
  templateUrl: './switch-map.component.html',
  styleUrls: ['./switch-map.component.scss']
})
export class SwitchMapComponent implements OnInit, AfterViewInit {

  @ViewChild('searchTag') searchTag?: ElementRef;

  constructor() { }

  ngOnInit(): void { }

  ngAfterViewInit(): void {
    const formValue = this.searchTag!.nativeElement;
    formValue?.subscribe((res: any) => {
      console.log(res);
    });
  }


  onSubmit(itemForm: any) {

  }

}
