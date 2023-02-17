import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListComponent } from './List/list.component';
import { FromEventComponent } from './from-event/from-event.component';
import { IntervalComponent } from './interval/interval.component';
import { OfFromComponent } from './of-from/of-from.component';

const routes: Routes = [
  { path: '', component: ListComponent },
  { path: 'fromEvent', component: FromEventComponent },
  { path: 'interval', component: IntervalComponent },
  { path: 'of-from', component: OfFromComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ObservableRoutingModule { }
