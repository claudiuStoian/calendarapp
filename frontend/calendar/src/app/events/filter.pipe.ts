import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter',
  pure: false
})
export class FilterPipe implements PipeTransform {

  transform(value: any, filter: any): any {
    if (value.length === 0 && filter !== '') {
      return value;
    }
    let resultArray = [];
    for (let item of value) {
      if (item.name.match('^.*' + filter + '.*$')) {
        resultArray.push(item);
      }
    }
    return resultArray;
  }

}
