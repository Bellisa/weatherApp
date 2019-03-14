import { Pipe, PipeTransform } from '@angular/core';
import { IHotel } from 'src/interfaces/IHotel';
import { filterType } from '../app.filter.component/typeFilter';
import { isNull, isNullOrUndefined } from 'util';

@Pipe({
  name: 'filterPipe',
  pure: true
})
export class FilterPipe implements PipeTransform {

  transform(hotels: IHotel[], filter: filterType): IHotel[] {

    if (!filter || (filter.star == 0 && isNullOrUndefined(filter.text))) {
      return hotels;
    }

    const filteredProducts: IHotel[] =
      filter.star == 0 ?
        hotels.filter((hotel: IHotel) => {
          return `${hotel.title.toLowerCase()}${hotel.description.toLowerCase()}`
            .includes(filter.text.toLowerCase());
        }) :
        !isNullOrUndefined(filter.text) ?
          hotels.filter((hotel: IHotel) => {
            return (`${hotel.title.toLowerCase()}${hotel.description.toLowerCase()}`
              .includes(filter.text.toLowerCase())) && hotel.stars == filter.star;
          }) :
          hotels.filter((hotel: IHotel) => {
            return hotel.stars == filter.star;
          });
    return filteredProducts;
  }
}
