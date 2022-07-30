// 危险指令
import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appDanger]'
})
export class DangerDirective {

  constructor(e:ElementRef) { 
    console.log(e)

    e.nativeElement.style.color = 'red'
    e.nativeElement.style.border = '1px solid red'
  }

}
