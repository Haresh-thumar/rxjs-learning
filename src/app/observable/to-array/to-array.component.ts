import { from, interval, of, subscribeOn, Subscription, take, toArray } from 'rxjs';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-to-array',
  templateUrl: './to-array.component.html',
  styleUrls: ['./to-array.component.scss']
})
export class ToArrayComponent implements OnInit {

  sourceSub!: Subscription;

  users: any[] = [
    { name: 'Anup', skill: 'Angular' },
    { name: 'Shekhar', skill: 'Html, css' },
    { name: 'Sharma', skill: 'Javascript' },
    { name: 'Haresh', skill: 'Typescript' }
  ];

  constructor() { }


  ngOnInit(): void {
    /*---- Example-1 ----*/
    const source = interval(1000);
    this.sourceSub = source.pipe(take(5), toArray()).subscribe(res => {
      console.log(res);
    });

    /*---- Example-2 ----*/
    const source2 = from(this.users);
    source2.pipe(toArray()).subscribe(res => console.log(res));

    /*---- Example-3 ----*/
    const source3 = of('Anup', 'Shekhar', 'Sharma', 'Haresh');
    source3.pipe(toArray()).subscribe(res => console.log(res));

  }






}
