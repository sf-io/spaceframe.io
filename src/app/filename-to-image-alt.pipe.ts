import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'filenameToImageAlt'
})
export class FilenameToImageAltPipe implements PipeTransform {

  transform(value: string): string {
    const file = value.split('/').pop() || '';
    const filename = file.split('.').shift() || '';
    
    const beautify = filename.replace(/_/g, ' ');
    return beautify;
  }

}
