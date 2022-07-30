import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'gender'
})
export class GenderPipe implements PipeTransform {

  transform(value: number, lang = 'zh') {
    if(lang == 'zh'){
      return ['女性','男性','未知'][value];
    }

    if(lang == 'en'){
      return ['Female','Male','Unknown'][value]
    }

    return undefined
  }

}
