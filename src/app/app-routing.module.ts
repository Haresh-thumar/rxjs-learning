import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ObservableCompoComponent } from './observable-compo/observable-compo.component';

const routes: Routes = [
  { path: '', redirectTo: 'observable', pathMatch: 'full' },
  { path: 'observable', component: ObservableCompoComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
