import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'booleanoAEspaniol'
})
export class BooleanoAEspaniolPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
