import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-myc08',
  templateUrl: './myc08.component.html',
  styleUrls: ['./myc08.component.css']
})
export class Myc08Component implements OnInit {
  names = ['东东', '然然'];

  constructor() {
    console.log('constructor: 构造方法, 组件出生时第一时间调用');
  }

  // 类似于 vue 的mounted 方法, 挂载时, 发送网络请求
  ngOnInit(): void {
    console.log('ngOnInit: 组件中的内容开始初始化');
  }
  ngAfterContentInit(): void {
    console.log('ngAfterContentInit: 数据初始化完毕');
  }
  ngAfterViewInit(): void {
    console.log('ngAfterViewInit: 用户界面初始化完毕');
  }
  ngAfterContentChecked(): void {
    console.log('ngAfterContentChecked: 数据发生变更');
  }
  ngAfterViewChecked(): void {
    console.log('ngAfterViewChecked: 用户界面发生变更');
  }
  ngOnDestroy(): void {
    console.log('ngOnDestroy: 组件即将销毁时');
  }

}
