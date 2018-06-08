import { Component, OnInit } from '@angular/core';
import { Formation } from '../interpolate/Formation'
@Component({
  selector: 'app-style',
  templateUrl: './style.component.html',
  styleUrls: ['./style.component.css']
})
export class StyleComponent implements OnInit {

  formations: Array<Formation> = [];
  constructor() { }

  ngOnInit() {
    this.formations = [
      new Formation('Module Angular', "angular s'est trop bien"),
      new Formation('Module JavaScript', "c'est vieux"),
      new Formation('Module TypeScript', "c'est nouveau mais c'est correct"),
    ]


  }
}
