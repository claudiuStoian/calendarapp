import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'etypeFilter'
})
export class EtypeFilterPipe implements PipeTransform {

  transform(value: any, filter: any): any {
    if (value.length === 0 && filter !== '') {
      return value;
    }
    let resultArray = [];
    for (let item of value) {
      if (item.eventType.toLowerCase().match('^.*' + filter.toLowerCase() + '.*$')) {
        resultArray.push(item);
      }
    }
    return resultArray;
  }

}
