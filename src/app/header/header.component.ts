import { Component, OnInit } from '@angular/core';
import { DesignUtilityService } from '../services/design-utility.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  exclusive: boolean = false;

  CrossCompoData?: string;



  constructor(private _designUtility: DesignUtilityService) { }

  ngOnInit(): void {
    /*---- subscribe the exclusive from service ----*/
    this._designUtility.exclusive.subscribe((res) => { this.exclusive = res; });

    /*------- Cross Component Communication Data -------*/
    this._designUtility.crossCompoCommunication.subscribe((res) => { this.CrossCompoData = res; });
  }

}
