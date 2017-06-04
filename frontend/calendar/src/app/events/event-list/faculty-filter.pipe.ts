import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'facultyFilter'
})
export class FacultyFilterPipe implements PipeTransform {

  transform(value: any, filter: any): any {
    if (value.length === 0 && filter !== '') {
      return value;
    }
    let resultArray = [];
    for (let item of value) {
      if (item.faculty.toLowerCase().match('^.*' + filter.toLowerCase() + '.*$')) {
        resultArray.push(item);
      }
    }
    return resultArray;
  }

}
