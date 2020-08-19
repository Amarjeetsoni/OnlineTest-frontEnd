import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'crrtAns'
})
export class CrrtAnsPipe implements PipeTransform {
  noOfCrrtAns:number=0
  transform(list:any) {
    for(let i=0;i<list.length;i++){
      if(list[i]==true)
        this.noOfCrrtAns++
    }
    return this.noOfCrrtAns;
  }

}
