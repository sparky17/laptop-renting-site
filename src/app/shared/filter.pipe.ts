import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {
  transform(value: any[], filterString: string, propName: string): any[] {
    if (!value || filterString === '' || !propName) {
      return value;
    }

    return value.filter(item => {
      if (item[propName] && typeof item[propName] === 'string') {
        return item[propName].toLowerCase().includes(filterString.toLowerCase());
      }
      return false; // Filter out items without the specified property or if it's not a string
    });
  }
}
