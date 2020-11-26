import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'shortDestination'
})
export class ShortDestinationPipe implements PipeTransform {

  transform(value: string): string {
    return value.split(',')[0];
  }

}
