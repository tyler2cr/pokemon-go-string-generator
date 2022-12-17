import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {BagStringComponent} from "./bag-string/bag-string.component";

const routes: Routes = [
  {
    path: "pokemon",
    component: BagStringComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    initialNavigation: 'enabledBlocking'
})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
