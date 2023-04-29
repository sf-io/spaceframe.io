import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'truncate'
})
export class TruncatePipe implements PipeTransform {

  transform(value: string, words: number): string {
    return value ? value.split(' ').slice(0, 2).join(' ') : '';
  }
}
