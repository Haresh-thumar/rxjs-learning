import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ObservableCompoComponent } from './observable-compo/observable-compo.component';
import { SubjectComponent } from './subject/subject.component';
import { HeaderComponent } from './header/header.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatBadgeModule } from '@angular/material/badge';
import { BehivourSubjectComponent } from './behivour-subject/behivour-subject.component';
import { Compo1Component } from './behivour-subject/compo1/compo1.component';
import { Compo2Component } from './behivour-subject/compo2/compo2.component';
import { Compo3Component } from './behivour-subject/compo3/compo3.component';

@NgModule({
  declarations: [
    AppComponent,
    ObservableCompoComponent,
    SubjectComponent,
    HeaderComponent,
    BehivourSubjectComponent,
    Compo1Component,
    Compo2Component,
    Compo3Component,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatBadgeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
