import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'multi'
})
export class MultiPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    console.log(args);
    let result : any;
    for (let i =0 ; i < args; i++) {
      result = result + ' ' + value;
    }
    return result;
  }

}