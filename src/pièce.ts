export class Pièce{
    static UnCentime: Pièce = new Pièce(1);
    static DeuxCentimes: Pièce = new Pièce(2);
    static CinqCentimes: Pièce = new Pièce(5);
    static DixCentimes: Pièce = new Pièce(10);
    static VingtCentimes: Pièce = new Pièce(20);
    static CinquanteCents: Pièce = new Pièce(50);
    static UnEuro: Pièce = new Pièce(100);
    static DeuxEuros: Pièce = new Pièce(200);

    public readonly ValeurEnCentimes: number;

    private constructor(valeurEnCentimes: number) {
        this.ValeurEnCentimes = valeurEnCentimes;
    }

    static FromMontant(montant: number) {
        if(montant == 1) return Pièce.UnCentime;
        if(montant == 2) return Pièce.DeuxCentimes;
        if(montant == 5) return Pièce.CinqCentimes;
        if(montant == 10) return Pièce.DixCentimes;
        if(montant == 20) return Pièce.VingtCentimes;
        if(montant == 50) return Pièce.CinquanteCents;
        if(montant == 100) return Pièce.UnEuro;
        if(montant == 200) return Pièce.DeuxEuros;
        throw new Error("Le montant ne correspond à aucune pièce");
    }

    public toString(){
        return this.ValeurEnCentimes + 'cts';
    }
}