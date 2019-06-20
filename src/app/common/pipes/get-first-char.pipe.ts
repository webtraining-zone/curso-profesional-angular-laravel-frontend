import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'getFirstChar'
})
export class GetFirstCharPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    return value.charAt(0);
  }

}
