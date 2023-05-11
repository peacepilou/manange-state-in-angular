import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Smart1Component } from './feature/smart1/smart1.component';
import { Smart2Component } from './feature/smart2/smart2.component';
import { Dumb1Component } from './ui/dumb1/dumb1.component';
import { Dumb2Component } from './ui/dumb2/dumb2.component';
import { HttpClientModule } from '@angular/common/http';
import { HeaderComponent } from './layout/header/header.component';

@NgModule({
  declarations: [
    AppComponent,
    Smart1Component,
    Smart2Component,
    Dumb1Component,
    Dumb2Component,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
