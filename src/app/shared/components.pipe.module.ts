import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FilterPipe } from '../components/pipes/filter.pipe';
import { ShortDescriptionPipe } from '../components/pipes/short-description.pipe';
import { SortingPipe } from '../components/pipes/sorting.pipe';

@NgModule({
  declarations: [
    FilterPipe,
    ShortDescriptionPipe,
    SortingPipe
  ],
  imports: [
    CommonModule
  ],
  exports:[
    FilterPipe,
    ShortDescriptionPipe,
    SortingPipe
  ]
})
export class ComponentsPipeModule { }
