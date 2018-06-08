import {Stagiaire} from './Stagiaire';
import {Formateur} from './Formateur';
export class Formation{
    constructor(public nom:string,public dateDebut:Date,public dateFin:Date,public stagiaires:Array<Stagiaire>,public formateurs:Array<Formateur>){
    }
}