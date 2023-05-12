import { Component, ViewChild, AfterViewInit, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { debounceTime, distinctUntilChanged, filter, map, switchMap } from 'rxjs';
import { Search, UtilityOperatorService } from 'src/app/services/utility-operator.service';

@Component({
  selector: 'app-switch-map',
  templateUrl: './switch-map.component.html',
  styleUrls: ['./switch-map.component.scss']
})
export class SwitchMapComponent implements OnInit, AfterViewInit {

  @ViewChild('searchForm') searchForm!: NgForm | any;

  searchResult: Array<Search> = new Array<Search>;

  constructor(private searchService: UtilityOperatorService) { }

  ngOnInit(): void {

  }

  ngAfterViewInit() {
    // debugger
    const formValue = this.searchForm.valueChanges;
    if (this.searchForm.valid) {
      formValue?.pipe(
        debounceTime(1000),
        distinctUntilChanged(),
        switchMap(res => this.searchService.getPlaylist(res))
      ).subscribe((res: Search) => {
        console.log(res)
        this.searchResult.push(res);
      })
    } else {
      console.log("Please Enter Valid Details...")
    }

    this.searchService.getPlaylist('').subscribe(res => {
      console.log(res);
    });

    // formValue?.pipe(
    //   // filter(() => this.searchForm.valid),
    //   // map((data: any) => data.searchterm),
    //   debounceTime(1000),
    //   distinctUntilChanged(),
    //   switchMap(res => this.searchService.getPlaylist(res))
    // ).subscribe((res: any) => {
    //   console.log(res);
    //   this.searchResult = res;
    // });
  }


};
