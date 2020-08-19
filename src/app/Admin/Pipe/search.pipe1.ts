import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'searchtext'
})
export class SearchPipe1 implements PipeTransform {

  transform(data: any, text: any, what: string): any {
    if(text){
      if(what==="user"){
        data = data.filter( ob=> ob.user.userName.toLowerCase().startsWith(text.toLowerCase()));
      }
      else if(what==="test"){
        data = data.filter( ob=> ob.test.testTitle.toLowerCase().startsWith(text.toLowerCase()));
      }
      else if(what==="top3Test"){
        data = data.filter( ob=> ob.test.testTitle.toLowerCase().startsWith(text.toLowerCase())).sort((a, b) => (a.marksScored > b.marksScored) ? -1 : 1).slice(0,3);
      }
    }
    else{
      data = data;
    }
    return data;
  }

}
