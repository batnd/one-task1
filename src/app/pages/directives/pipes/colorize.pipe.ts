import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'colorize',
  standalone: true
})
export class ColorizePipe implements PipeTransform {
  transform(value: string): string {
    if (/^[0-9]$/.test(value)) return `${value}(blue)`;
    else if (/^[0-9]{2,}/.test(value)) return `${value}(green)`;
    else if (/^[a-zA-Z0-9]*\.?[a-zA-Z0-9]*$/.test(value)) return `${value}(okay)`;
    else return `${value}(red)`;
  }
}
