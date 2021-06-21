import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'orderBy'
})
export class OrderByPipe implements PipeTransform {

  transform<T>(value: Array<T>, key: string, isAsc: boolean = false): Array<T> {
    if (Array.isArray(value) === false) {
      return value;
    }

    return [...value].sort((obj1: T, obj2: T) => {
      const val1 = getNestedValue(obj1, key);
      const val2 = getNestedValue(obj2, key);

      if (val1 > val2) { return isAsc ? 1 : -1; }
      if (val1 < val2) { return isAsc ? -1 : 1; }
      return 0;
    });
  }
}

function getNestedValue(obj: { [key: string]: any }, name: string): any {
  const propNames = name.split('.');
  if (propNames.length === 1) { return obj[name]; }

  const newObj = { ...obj[propNames[0]] };
  const newName = propNames.slice(1).join('.');

  return getNestedValue(newObj, newName);
}
