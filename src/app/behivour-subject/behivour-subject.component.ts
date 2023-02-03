import { DesignUtilityService } from 'src/app/services/design-utility.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-behivour-subject',
  templateUrl: './behivour-subject.component.html',
  styleUrls: ['./behivour-subject.component.scss']
})
export class BehivourSubjectComponent implements OnInit {

  /*----- Custom Init Value in Subject -----*/
  // subjectValue: string = 'Haresh';

  /*----- ByDefault Init Value set From Service File Using Behivour-Subject ------*/
  BehivourSubjectValue!: string;

  constructor(private _designUtility: DesignUtilityService) { }

  ngOnInit(): void {
    /*---- Subject Value get From Service File ----*/
    // this._designUtility.subjectValue.subscribe((res) => this.subjectValue = res);

    /*---- Subject Value get From Service File ----*/
    this._designUtility.BehivourSubjectValue.subscribe((res) => this.BehivourSubjectValue = res);
  }

}
