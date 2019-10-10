import { Pipe, PipeTransform } from '@angular/core';
import moment from 'moment';

@Pipe({
  name: 'formatDate'
})
export class FormatDatePipe implements PipeTransform {
  transform(value: string, args: string): string {
    if (!value) { return null; }

    if (!args) { return value; }

    return moment(value).format(args);
  }

}
