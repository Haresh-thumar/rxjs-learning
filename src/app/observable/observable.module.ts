import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ObservableRoutingModule } from './observable-routing.module';
import { ListComponent } from './List/list.component';
import { FromEventComponent } from './from-event/from-event.component';
import { IntervalComponent } from './interval/interval.component';
import { OfFromComponent } from './of-from/of-from.component';


@NgModule({
  declarations: [
    ListComponent,
    FromEventComponent,
    IntervalComponent,
    OfFromComponent
  ],
  imports: [
    CommonModule,
    ObservableRoutingModule
  ],
  providers: [],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class ObservableModule { }
