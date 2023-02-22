import { Component, OnInit } from '@angular/core';
import { from, map, pluck, toArray } from 'rxjs';

@Component({
  selector: 'app-pluck',
  templateUrl: './pluck.component.html',
  styleUrls: ['./pluck.component.scss']
})
export class PluckComponent implements OnInit {

  userData: any;
  userData2: any;
  userData3: any;

  users = [
    {
      name: 'Davies',
      skill: 'Angular',
      job: {
        title: 'Angular Developer',
        exp: '5 years',
        company: {
          location: 'Junagadh',
          Salery: 10000
        }
      }
    },
    {
      name: 'Evans',
      skill: 'Typescript',
      job: {
        title: 'Typescript Developer',
        exp: '8 years',
        company: {
          location: 'Ahmedabad',
          Salery: 25000
        }
      }
    },
    {
      name: 'Thomas',
      skill: 'Html',
      job: {
        title: 'Html Developer',
        exp: '15 years',
        company: {
          location: 'Mumbai',
          Salery: 38000
        }
      }
    },
    {
      name: 'Adams',
      skill: 'Css',
      job: {
        title: 'Css Developer',
        exp: '13 years',
        company: {
          location: 'Pune',
          Salery: 42000
        }
      }
    },
    {
      name: 'Walker',
      skill: 'Javascript',
      job: {
        title: 'Javascript Developer',
        exp: '10 years',
        company: {
          location: 'Hyderabad',
          Salery: 50000
        }
      }
    },
    {
      name: 'Martin',
      skill: 'Nodejs',
      job: {
        title: 'Nodejs Developer',
        exp: '4 years',
        company: {
          location: 'Bangalore',
          Salery: 50000
        }
      }
    },
    {
      name: 'Smith',
      skill: 'Python',
      job: {
        title: 'Python Developer',
        exp: '2 years',
        company: {
          location: 'New Delhi',
          Salery: 75000
        }
      }
    }
  ];

  constructor() { }

  ngOnInit(): void {
    /*--------------------------------------------------------------
                              Example-1
    --------------------------------------------------------------*/
    let objData = from(this.users).pipe(pluck('name'), toArray());

    objData.subscribe(res => {
      this.userData = res;
    });

    /*--------------------------------------------------------------
                             Example-2
   --------------------------------------------------------------*/
    let objData2 = from(this.users).pipe(pluck('job', 'title'), toArray());

    objData2.subscribe(res => {
      console.log(res);
      this.userData2 = res;
    });

    /*--------------------------------------------------------------
                             Example-3
   --------------------------------------------------------------*/
    let objData3 = from(this.users).pipe(pluck('job', 'company', 'location'), toArray());

    objData3.subscribe(res => {
      console.log(res);
      this.userData3 = res;
    });



  }

}
