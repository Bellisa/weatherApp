import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'shortDescription'
})
export class ShortDescriptionPipe implements PipeTransform {

  transform(value: string, lenght?: number): string {
    //str.substr
    lenght = lenght ? lenght : 30;
    return value.length > lenght ? `${value.substring(0, lenght ? lenght : 30)} ...` : value;
  }

}
