import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { appSortType } from './appSortType';

@Component({
  selector: 'app-sort',
  templateUrl: './app.sort.component.html',
  styleUrls: ['./app.sort.component.css']
})
export class AppSortComponent {

  public appSort: appSortType =
    {
      fieldName: "",
      ask: false,
      classArrow: ""
    };
  @Output()
  public sortEvent: EventEmitter<appSortType> = new EventEmitter();

  public sorted(field: string) {
    if (this.appSort.fieldName === field) {
      this.appSort.ask = !this.appSort.ask;
    }
    else {
      this.appSort.fieldName = field;
      this.appSort.ask = true;
    }

    this.appSort.ask ?
      this.appSort.classArrow = "fa fa-arrow-down ml-3" :
      this.appSort.classArrow = "fa fa-arrow-up ml-3";

    this.sortEvent.emit(this.appSort);
  }
}
