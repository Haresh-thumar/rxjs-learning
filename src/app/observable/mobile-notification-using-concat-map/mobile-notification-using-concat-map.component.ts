import { Component, OnInit } from '@angular/core';
import { concatMap, delay, from, mergeMap, of } from 'rxjs';
import { UtilityOperatorService } from 'src/app/services/utility-operator.service';

@Component({
  selector: 'app-mobile-notification-using-concat-map',
  templateUrl: './mobile-notification-using-concat-map.component.html',
  styleUrls: ['./mobile-notification-using-concat-map.component.scss']
})
export class MobileNotificationUsingConcatMapComponent implements OnInit {

  notifyData: any = [
    {
      name: 'Facebook',
      icon: 'https://shorturl.at/zNRVW',
      time: '4 Second Ago.',
      img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSHtB9iZ4QTO1ZKnRSUg7QaqcQqnZEeBK2tEdktlf89FAhlN7G-BhGVGqzrmEJtzLhR2nw&usqp=CAU',
      userName: 'Alex Johnson',
      comment: 'Commented on your #CodeWithBear Post: Awasome Post !!!! Thanks...'
    },
    {
      name: 'Twitter',
      icon: 'https://shorturl.at/adwEP',
      time: '3 Second Ago.',
      img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_SAxKuyO_bRHqdUTEAeaDLyvlYV5FOjXEl66zHqrcVEm6JTWqPdAZLcDO7cRhsLErrDo&usqp=CAU',
      userName: 'James Smith',
      comment: 'Twitter :Commented on your #CodeWithBear Awasome Post !!!! Thanks...'
    },
    {
      name: 'Linkdin',
      icon: 'https://shorturl.at/dOST7',
      time: '2 Second Ago.',
      img: 'https://thumbs.dreamstime.com/b/person-holding-tablet-social-network-concept-young-business-working-shows-inscription-online-survey-263673168.jpg',
      userName: 'David Smith',
      comment: 'Posted : Lorem Ipsum is simply dummy text of the printing and typesetting.'
    },
    {
      name: 'Youtube',
      icon: 'https://shorturl.at/dkly2',
      time: '1 Second Ago.',
      img: 'https://media.istockphoto.com/id/1305971224/photo/solution-problem-blackboard-direction-choice-arrow.jpg?s=612x612&w=is&k=20&c=SV9DA8nX6Z68hzo1TAdShbwJRsxqSpvwrSGh0-EtLxs=',
      userName: 'Alex Johnson',
      comment: 'Commented on your #CodeWithBear Post: Awasome Post !!!! Thanks...'
    }
  ];

  userNotification: any;

  constructor(private _du: UtilityOperatorService) { }

  ngOnInit(): void {

    from(this.notifyData).pipe(concatMap(res => this.getHtml(res)))
      .subscribe(res => {
        console.log(res);
        this._du.notification(res, 'elContainer');
      });

  }

  getHtml(data: any) {
    return of(`<div style="display:flex;justify-content:space-between;font-size:13px;font-weight:600;padding:10px 0 10px;">
    <div class="app">
      <img src="${data.icon}"
        width="20">
        ${data.name}
      </div>
      <div style="opacity: 0.3;font-size: 12px;font-weight: 500;">
      ${data.time}
      </div>
    </div>
    <div class="cardBody">
      <img src="${data.img}"
      style="float: right;width: 55px;height: 55px;object-fit: cover;margin: 0 0 0 10px;">
      <strong>${data.userName}</strong>
      <p>${data.comment}</p>
    </div>`).pipe(delay(2000));
  }

}
