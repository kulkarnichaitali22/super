import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'power'
})
export class PowerPipe implements PipeTransform {

  i : any
  result:any
  transform(a : number, b: number): number {

    for( this.i = a ; a <= b ; this.i++){
        this.result = this.result * b ;
    }
    return this.result;
  }

}
