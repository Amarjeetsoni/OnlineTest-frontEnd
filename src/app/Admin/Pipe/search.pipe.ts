import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  newList :any;
  transform(userTest: any, searchText: any,attempted: boolean,undelared: boolean): any {
    if(searchText){
      this.newList = userTest.filter(obj => obj.user.userName.toLowerCase().startsWith(searchText.toLowerCase()));
    }
    else {
      this.newList  = userTest;
  }
  return this.newList;
  }

}
