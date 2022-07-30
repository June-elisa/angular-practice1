import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-myc03',
  templateUrl: './myc03.component.html',
  styleUrls: ['./myc03.component.css']
})
export class Myc03Component implements OnInit {
  size = 17;
  curP = 0;

  nextPage(){
    this.curP++;
    if(this.curP == 4){
      this.curP = 0
    }
  }
  prevPage(){
    this.curP--;
    if(this.curP < 0){
      this.curP = 3
    }
  }

  constructor() { }

  ngOnInit(): void {
  }

}
