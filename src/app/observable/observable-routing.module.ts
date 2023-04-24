import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListComponent } from './List/list.component';
import { FromEventComponent } from './from-event/from-event.component';
import { IntervalComponent } from './interval/interval.component';
import { OfFromComponent } from './of-from/of-from.component';
import { ToArrayComponent } from './to-array/to-array.component';
import { CustomObservableComponent } from './custom-observable/custom-observable.component';
import { MapComponent } from './map/map.component';
import { PluckComponent } from './pluck/pluck.component';
import { FilterComponent } from './filter/filter.component';
import { TapComponent } from './tap/tap.component';
import { TakeComponent } from './take/take.component';
import { RetryComponent } from './retry/retry.component';
import { DebounceTimeDistincuntilchangedComponent } from './debounce-time-distincuntilchanged/debounce-time-distincuntilchanged.component';
import { ConcatMapComponent } from './concat-map/concat-map.component';
import { SubjectComponent } from './subject/subject.component';
import { BehaviourSubjectComponent } from './behaviour-subject/behaviour-subject.component';
import { ReplySubjectComponent } from './reply-subject/reply-subject.component';
import { AsyncSubjectComponent } from './async-subject/async-subject.component';
import { ConcatComponent } from './concat/concat.component';
import { MergeComponent } from './merge/merge.component';
import { MergeMapComponent } from './merge-map/merge-map.component';
import { MobileNotificationUsingConcatMapComponent } from './mobile-notification-using-concat-map/mobile-notification-using-concat-map.component';

const routes: Routes = [
  { path: '', component: ListComponent },
  { path: 'fromEvent', component: FromEventComponent },
  { path: 'interval', component: IntervalComponent },
  { path: 'of-from', component: OfFromComponent },
  { path: 'toArray', component: ToArrayComponent },
  { path: 'custom-Obs', component: CustomObservableComponent },
  { path: 'map', component: MapComponent },
  { path: 'pluck', component: PluckComponent },
  { path: 'filter', component: FilterComponent },
  { path: 'tap', component: TapComponent },
  { path: 'take', component: TakeComponent },
  { path: 'retry', component: RetryComponent },
  { path: 'DebounceTime-Distincuntilchanged', component: DebounceTimeDistincuntilchangedComponent },
  { path: 'concatMap', component: ConcatMapComponent },
  { path: 'Subject', component: SubjectComponent },
  { path: 'behaviour-sbj', component: BehaviourSubjectComponent },
  { path: 'reply-subject', component: ReplySubjectComponent },
  { path: 'async-subject', component: AsyncSubjectComponent },
  { path: 'concat', component: ConcatComponent },
  { path: 'merge', component: MergeComponent },
  { path: 'mergeMap', component: MergeMapComponent },
  { path: 'mobileNotification', component: MobileNotificationUsingConcatMapComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ObservableRoutingModule { }
