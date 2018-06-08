export class Formateur {
    constructor(private connaisances: Array<Connaissance>) {
    }
    public enseigner(fomartion:Connaissance):Array<Connaissance>{
        if (fomartion.annéeExpérience<2) {
          this.connaisances= [];
        }
        return this.connaisances;
    }
}
export class Connaissance {
    constructor(public nom: string, public annéeExpérience: number | string | Date) {
    }
}