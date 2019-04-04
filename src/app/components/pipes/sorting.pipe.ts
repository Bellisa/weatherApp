import { Pipe, PipeTransform } from '@angular/core';
import { IHotel } from 'src/interfaces/IHotel';
import { filterType } from '../app.filter.component/typeFilter';
import { appSortType } from '../app.sort/appSortType';
import { isNullOrUndefined } from 'util';

@Pipe({
  name: 'sorting',
  pure: false
})
export class SortingPipe implements PipeTransform {

  transform(hotels: IHotel[], appSort: appSortType): IHotel[] {
    if (isNullOrUndefined(appSort)) return hotels;

    return hotels.sort((a: IHotel, b: IHotel) => {

      if (typeof a[`${appSort.fieldName}`] === 'number') {
        return (appSort.ask) ?
          a[`${appSort.fieldName}`] - b[`${appSort.fieldName}`]
          :
          b[`${appSort.fieldName}`] - a[`${appSort.fieldName}`];
      }
      else {
        return (appSort.ask) ?
          a[`${appSort.fieldName}`].localeCompare(b[`${appSort.fieldName}`]) : b[`${appSort.fieldName}`].localeCompare(a[`${appSort.fieldName}`]);
      }
    });
  }
}
