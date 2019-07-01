import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatSortModule } from '@angular/material/sort';
import { MatTableModule } from '@angular/material/table';

import { ListRoutingModule } from './list-routing.module';
import { ListComponent } from './list/list.component';
import { DetailsComponent } from './details/details.component';
import { FormComponent } from './form/form.component';

@NgModule({
  declarations: [ListComponent, DetailsComponent, FormComponent],
  imports: [
    CommonModule,
    MatSortModule,
    MatTableModule,
    ListRoutingModule
  ]
})
export class ListModule { }
