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
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ObservableRoutingModule { }
