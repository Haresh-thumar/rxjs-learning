import { PromiseComponent } from './promise/promise.component';
import { SubjectComponent } from './subject/subject.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ObservableComponent } from './observable/observable.component';
import { BehivourSubjectComponent } from './behivour-subject/behivour-subject.component';
import { AsyncAwaitComponent } from './async-await/async-await.component';
import { ObservableModule } from './observable/observable.module';

const routes: Routes = [
  { path: '', redirectTo: 'observable', pathMatch: 'full' },
  {
    path: 'observable', component: ObservableComponent,
    loadChildren: () => import('./observable/observable.module').then(mod => ObservableModule)
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
