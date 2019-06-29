import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';3

import { ListComponent } from './list/list.component';
import { DetailsComponent } from './details/details.component';

const routes: Routes = [
  {path:"", component:ListComponent},
  {path:"detail", component:DetailsComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ListRoutingModule { }
