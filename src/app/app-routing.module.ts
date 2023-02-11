import { PromiseComponent } from './promise/promise.component';
import { SubjectComponent } from './subject/subject.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ObservableCompoComponent } from './observable/observable.component';
import { BehivourSubjectComponent } from './behivour-subject/behivour-subject.component';
import { AsyncAwaitComponent } from './async-await/async-await.component';
import { FromEventComponent } from './observable/from-event/from-event.component';
import { ListComponent } from './observable/List/list.component';

const routes: Routes = [
  { path: '', redirectTo: 'observable', pathMatch: 'full' },
  {
    path: 'observable', component: ObservableCompoComponent,
    children: [
      // { path: '', redirectTo: 'list', pathMatch: 'full' },
      { path: '', component: ListComponent },
      { path: 'observable/fromEvent', component: FromEventComponent },
    ]
  },
  { path: 'subject', component: SubjectComponent },
  { path: 'behivour-Subject', component: BehivourSubjectComponent },
  { path: 'promise', component: PromiseComponent },
  { path: 'async-await', component: AsyncAwaitComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
