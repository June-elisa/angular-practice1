import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-myc05',
  templateUrl: './myc05.component.html',
  styleUrls: ['./myc05.component.css']
})
export class Myc05Component implements OnInit {
  image = 'https://t7.baidu.com/it/u=4162611394,4275913936&fm=193&f=GIF'

  show(){
    alert('事件触发！')
  }
  data = '<h1> hello world! </h1>'

  name = 'zhaocai'

  constructor() { }

  ngOnInit(): void {
  }

}
