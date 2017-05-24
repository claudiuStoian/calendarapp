import { Pipe, PipeTransform } from '@angular/core';
import { csEvent } from "app/events/event";
import * as moment from 'moment';

@Pipe({
  name: 'dateFilter',
  pure: false
})
export class DateFilterPipe implements PipeTransform {

  transform(value: any, filter: string): any {
    if (value.length === 0 && filter !== null) {
      return value;
    }
    let resultArray = [];
    for (let item of value) {
      if (moment(item.date).isAfter(moment(filter))) {
        resultArray.push(item);
      }
    }
    value = resultArray;
    return value;
  }

}
