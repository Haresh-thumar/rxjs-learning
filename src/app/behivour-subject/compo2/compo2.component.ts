import { Component, OnInit } from '@angular/core';
import { DesignUtilityService } from 'src/app/services/design-utility.service';

@Component({
  selector: 'app-compo2',
  templateUrl: './compo2.component.html',
  styleUrls: ['./compo2.component.scss']
})
export class Compo2Component implements OnInit {

  /*----- Custom Init Value in Subject -----*/
  subjectValue: string = 'Haresh';

  /*----- ByDefault Init Value set From Service File Using Behivour-Subject ------*/
  BehivourSubjectValue!: string;

  constructor(private _designUtility: DesignUtilityService) { }

  ngOnInit(): void {
    this._designUtility.BehivourSubjectValue.subscribe((res) => this.BehivourSubjectValue = res);
  }

  subjectChange(uname: any) {
    console.log(uname.value);
    /*---- Response Assign in Subject Value ----*/
    this.subjectValue = uname.value;

    /*---- Subject Value get From Service File ----*/
    this._designUtility.subjectValue.next(uname.value);
  }

  bhvSubjectChange(uname: any) {
    console.log(uname.value);

    /*---- Response Assign in Behivour-Subject Value ----*/
    this.BehivourSubjectValue = uname.value;

    /*---- Subject Value get From Service File ----*/
    this._designUtility.BehivourSubjectValue.next(uname.value);
  }

}
