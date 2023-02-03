import { SubjectComponent } from './subject/subject.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ObservableCompoComponent } from './observable-compo/observable-compo.component';
import { BehivourSubjectComponent } from './behivour-subject/behivour-subject.component';

const routes: Routes = [
  { path: '', redirectTo: 'subject', pathMatch: 'full' },
  { path: 'observable', component: ObservableCompoComponent },
  { path: 'subject', component: SubjectComponent },
  { path: 'behivour-Subject', component: BehivourSubjectComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
