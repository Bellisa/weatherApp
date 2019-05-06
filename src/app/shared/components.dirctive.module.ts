import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShowControlAuthDirective } from '../components/directive/show-control-auth.directive';

@NgModule({
  declarations: [
    ShowControlAuthDirective
  ],
  imports: [
    CommonModule
  ],
  exports:[
    ShowControlAuthDirective
  ]
})
export class ComponentsDirectiveModule { }
