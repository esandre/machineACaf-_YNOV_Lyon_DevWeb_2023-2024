export class Pièce{
    static CinquanteCents: Pièce = new Pièce(50);
    static UnEuro: Pièce = new Pièce(100);
    static DeuxEuros: Pièce = new Pièce(200);

    public readonly ValeurEnCentimes: number;

    private constructor(valeurEnCentimes: number) {
        this.ValeurEnCentimes = valeurEnCentimes;
    }

    static FromMontant(montant: number) {
        if(montant == 50) return Pièce.CinquanteCents;
        if(montant == 100) return Pièce.UnEuro;
        if(montant == 200) return Pièce.DeuxEuros;
        throw new Error("Le montant ne correspond à aucune pièce");
    }

    public toString(){
        return this.ValeurEnCentimes + 'cts';
    }
}