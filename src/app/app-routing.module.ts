import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Smart1Component } from './feature/smart1/smart1.component';
import { Smart2Component } from './feature/smart2/smart2.component';

const routes: Routes = [
  { path: 'smart-1', component: Smart1Component},
  { path: 'smart-2', component: Smart2Component}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
