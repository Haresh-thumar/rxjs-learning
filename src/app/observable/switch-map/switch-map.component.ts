import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, NgForm } from '@angular/forms';
import { map, pluck } from 'rxjs';

@Component({
  selector: 'app-switch-map',
  templateUrl: './switch-map.component.html',
  styleUrls: ['./switch-map.component.scss']
})
export class SwitchMapComponent implements OnInit, AfterViewInit {

  myForm!: FormGroup;
  formattedMessage?: string;
  formBuilder: any;


  constructor(private _fb: FormBuilder) { }

  ngOnInit(): void {
    this.myForm = new FormGroup({
      name: new FormControl(),
    });
  }

  ngAfterViewInit(): void {
    this.onChanges();
  }

  onChanges() {
    this.myForm?.valueChanges.subscribe(val => {
      this.formattedMessage = `Hello, My name is ${val.name}`;
    });
  }




};
