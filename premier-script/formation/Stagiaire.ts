import { Personne, Genre, Religion } from './Personne';
export class Stagiaire extends Personne {
    constructor(public listeCertification: Array<Certification>, nom: Personne['nom'], prenom: Personne['prenom'],genre:Genre,religion:Religion) {
        super(nom, prenom,genre,religion);
    }
}
export class Certification {
    constructor(public name: string, public anneeObtiention: number) {
    }
}