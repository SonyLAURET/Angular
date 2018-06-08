export enum Genre { Homme='Homme', Femme='Femme' };
export enum Religion { Buddhism='Buddhism', Judaism='Judaism', Islam='Islam', Catholicism='Catholicism', Atheist='Atheist' };
export class Personne {
    constructor(public nom: string, public prenom: string,public genre:Genre,public religion:Religion) {
    }
    
    public boire(params: Boisson): string {
        let boisson:string =  params.nom;
        if (params.isAlcool) {
            boisson= boisson + " est alcolisée";
        }
        if (params.isBio) {
            boisson= boisson +' est bio.';
        } 
        return boisson;
    }

    public toString():string{
        return this.prenom +' '+this.nom;
    }
}


export class Boisson {
    constructor(public nom: string, public isAlcool: boolean, public isBio: boolean) {
    }

}