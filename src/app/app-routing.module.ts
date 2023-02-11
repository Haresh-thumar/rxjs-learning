import { PromiseComponent } from './promise/promise.component';
import { SubjectComponent } from './subject/subject.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ObservableCompoComponent } from './observable-compo/observable-compo.component';
import { BehivourSubjectComponent } from './behivour-subject/behivour-subject.component';
import { AsyncAwaitComponent } from './async-await/async-await.component';

const routes: Routes = [
  { path: '', redirectTo: 'promise', pathMatch: 'full' },
  { path: 'observable', component: ObservableCompoComponent },
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
