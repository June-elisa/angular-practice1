import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-myc06',
  templateUrl: './myc06.component.html',
  styleUrls: ['./myc06.component.css']
})
export class Myc06Component implements OnInit {
  count = 5
  disabled = false

  doAdd(){
    this.count++;
  }

  constructor() { }

  ngOnInit(): void {
  }

}
