// 隐藏指令
import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appHidden]'
})
export class HiddenDirective {

  constructor(e:ElementRef) {
    console.log('触发隐藏指令',e)
    e.nativeElement.style.display = 'none'
   }

}
