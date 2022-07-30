import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Myc04Component } from './myc04/myc04.component';
import { Myc05Component } from './myc05/myc05.component';
import { Myc06Component } from './myc06/myc06.component';
import { Myc01Component } from './myc01/myc01.component';
import { Myc02Component } from './myc02/myc02.component';
import { Myc03Component } from './myc03/myc03.component';
import { Mycc05Component } from './mycc05/mycc05.component';
import { HiddenDirective } from './hidden.directive';
import { DangerDirective } from './danger.directive';
import { FocusDirective } from './focus.directive';

@NgModule({
  declarations: [
    AppComponent,
    Myc04Component,
    Myc05Component,
    Myc06Component,
    Myc01Component,
    Myc02Component,
    Myc03Component,
    Mycc05Component,
    HiddenDirective,
    DangerDirective,
    FocusDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
