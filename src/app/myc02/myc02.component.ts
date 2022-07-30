import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-myc02',
  templateUrl: './myc02.component.html',
  styleUrls: ['./myc02.component.css']
})
export class Myc02Component implements OnInit {
  names = ['东东', '亮亮', '然然', '小新', '华哥'];
  products = [
    { title: 'iPhone', price: 7999, count: 5 },
    { title: 'Oppo', price: 5999, count: 2 },
    { title: 'vivo', price: 4999, count: 1 },
    { title: 'HuaWei', price: 6999, count: 4 },
  ];
  title = '';
  price = 0;
  count = 0;

  doAdd() {
    let p = {
      title: this.title,
      price: this.price,
      count: this.count,
    };
    this.products.push(p);
    
    this.title = '';
    this.price = 0;
    this.count = 0;
  }
  constructor() { }

  ngOnInit(): void {
  }

}
