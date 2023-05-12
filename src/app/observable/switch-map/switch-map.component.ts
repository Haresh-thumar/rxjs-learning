import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { concatMap, debounceTime, distinctUntilChanged, map } from 'rxjs';
import { Search, UtilityOperatorService } from 'src/app/services/utility-operator.service';

@Component({
  selector: 'app-switch-map',
  templateUrl: './switch-map.component.html',
  styleUrls: ['./switch-map.component.scss']
})
export class SwitchMapComponent implements AfterViewInit {

  @ViewChild('searchForm') searchForm!: NgForm;

  searchResult: any;

  constructor(private searchService: UtilityOperatorService) { }

  ngAfterViewInit() {
    const formValue = this.searchForm.valueChanges;
    formValue?.pipe(
      map((data: any) => data.searchterm),
      debounceTime(500),
      distinctUntilChanged(),
      concatMap(res => this.searchService.getPlaylist(res))
    ).subscribe((res: any) => {
      console.log(res);
    });

    this.searchplaylist();
  }

  searchplaylist() {
    this.searchService.getPlaylist('').subscribe(res => {
      console.log(res);
      this.searchResult = res;
    });
  }


};
