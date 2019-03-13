import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { IHotel } from 'src/interfaces/IHotel';
import { filterType } from './typeFilter';

@Component({
  selector: 'app-filter-component',
  templateUrl: './app.filter.component.component.html',
  styleUrls: ['./app.filter.component.component.css']
})
export class AppFilterComponentComponent {
  public textFilter: string;
  public star: number = 0;

  @Output()
  public filerApplyEvent: EventEmitter<filterType> = new EventEmitter();

  public filterChange(value: KeyboardEvent) {
    this.textFilter = (<HTMLInputElement>event.target).value;
    this.filerApplyEvent.emit({ text: this.textFilter, star: this.star });
  }

  public onChange(star: number) {
    this.star = star;
    this.filerApplyEvent.emit({ text: this.textFilter, star: this.star });
  }

  public clickClear() {
    this.textFilter="";
    this.filerApplyEvent.emit({ text: this.textFilter, star: this.star });
  }
}
