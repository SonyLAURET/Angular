import { Component, OnInit } from '@angular/core';
import {Formation} from './Formation'
@Component({
  selector: 'app-interpolate',
  templateUrl: './interpolate.component.html',
  styleUrls: ['./interpolate.component.css']
})
export class InterpolateComponent implements OnInit {

  prenom:string= "Maxime";
  nom:string='Duchene';
  formation:Formation= new Formation('Angular',"apprentissage d'angular");
  constructor( ) {
  }

  getFullName(){
    return this.nom+' '+this.prenom;
  }
  getFormation(){
    return this.formation.nom +' : '+this.formation.description;
  }

  ngOnInit() {
  }

}
