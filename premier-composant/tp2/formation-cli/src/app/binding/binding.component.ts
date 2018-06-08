import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-binding',
  templateUrl: './binding.component.html',
  styleUrls: ['./binding.component.css']
})
export class BindingComponent implements OnInit {
  isHidden: boolean = true;
  color: string = 'red';
  isNotHidden: boolean = true;
  reveal:boolean=false;
  constructor() { }
  
  mouseOver(){
    this.reveal=!this.reveal;
  }

  mouseOut(){
    this.reveal=!this.reveal;
  }

  visibilityClik() {
    this.isNotHidden = !this.isNotHidden;
  }

  ngOnInit() {
    setInterval(() => {
      this.isHidden = !this.isHidden;
    }, 2000);
    setInterval(() => {
      if (this.color = 'red') {
        this.color = 'green';
      } else {
        this.color = 'red';
      }
    }, 1000);
  }

}
