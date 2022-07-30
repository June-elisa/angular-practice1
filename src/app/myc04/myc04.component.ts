import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-myc04',
  templateUrl: './myc04.component.html',
  styleUrls: ['./myc04.component.css']
})
export class Myc04Component implements OnInit {
  name = "jinbao"
  age= 7

  married = false

  teachers = ['红红狗','亮亮狗','招财猫','斑点狗'];

  boss = {
    name:'大壮',
    age:10,
    phone:'10086'
  }

  constructor() { }

  ngOnInit(): void {
  }

}
