import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterAttempted'
})
export class FilterAttemptedPipe implements PipeTransform {

  transform(userTest: any,x:boolean): any {
    if(x==true)
      userTest=userTest.filter(user=>user.attempted==true);
    
      return userTest;
   
  }

}
