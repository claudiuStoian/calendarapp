import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'locationFilter'
})
export class LocationFilterPipe implements PipeTransform {

  transform(value: any, filter: any): any {
    if (value.length === 0 && filter !== '') {
      return value;
    }
    let resultArray = [];
    for (let item of value) {
      if (item.location.toLowerCase().match('^.*' + filter.toLowerCase() + '.*$')) {
        resultArray.push(item);
      }
    }
    return resultArray;
  }

}
