import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'mytitleCase',
  standalone: true
})
export class MyTitleCasePipe implements PipeTransform {

  transform(value:string): string {
    if(!value)
      {
        return value;
      }
      return value.split(' ').map(word => this.capitalize(word)).join(' ');
  }
  private capitalize(word: string): string {
    return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
  }
}
