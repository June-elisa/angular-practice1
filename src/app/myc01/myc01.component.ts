// 条件渲染
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-myc01',
  templateUrl: './myc01.component.html',
  styleUrls: ['./myc01.component.css']
})
export class Myc01Component implements OnInit {
  score = 60

  constructor() { }

  ngOnInit(): void {
  }

}
