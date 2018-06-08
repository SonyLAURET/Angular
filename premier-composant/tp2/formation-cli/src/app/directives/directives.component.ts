import { Component, OnInit } from '@angular/core';
import { Formation } from '../interpolate/Formation';

@Component({
  selector: 'app-directives',
  templateUrl: './directives.component.html',
  styleUrls: ['./directives.component.css']
})
export class DirectivesComponent implements OnInit {

  isDisplay: boolean = true;
  formations: Array<Formation> = [];
  constructor() { }

  getColorByElementFirst(isFirst: boolean = false, isLast: boolean = false) {
    if (isFirst) {
      return 'red';
    }
    else if (isLast) {
      return 'green';
    } else {
      return 'black';
    }
  }

  getColorByElementEven(isEven: boolean = false) {
    return isEven ? 'grey' : 'white';
  }
  hiddenClick() {
    this.isDisplay = !this.isDisplay;
  }
  ngOnInit() {
    this.formations = [
      new Formation('Module Angular', "angular s'est trop bien"),
      new Formation('Module JavaScript', "c'est vieux"),
      new Formation('Module TypeScript', "c'est nouveau mais c'est correct"),
    ]


  }

}
