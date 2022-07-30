// 焦点指令
import { Directive,ElementRef } from '@angular/core';

@Directive({
  selector: '[appFocus]'
})
export class FocusDirective {

  constructor(e:ElementRef) {
    console.log('触发焦点指令',e)
    e.nativeElement.focus()
   }

}