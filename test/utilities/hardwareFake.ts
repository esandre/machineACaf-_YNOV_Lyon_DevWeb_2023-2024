import {HardwareInterface} from "../../src/hardware/hardware.interface";
import {Pièce} from "../../src/pièce";

export class HardwareFake implements HardwareInterface {
    private readonly _estDysfonctionnel: boolean;
    private _moneyInsertedCallback: (moneyInserted: number) => void = () => {};
    private _sucreAppuyéCallback: (newState: boolean) => void = () => {};

    constructor(estDysfonctionnel: boolean) {
        this._estDysfonctionnel = estDysfonctionnel;
    }

    public registerBoutonSucreAppuyéCallback(callback: (newState: boolean) => void): void {
        this._sucreAppuyéCallback = callback;
    }
    public ajouterDoseSucre(): number {
        return 0;
    }

    public servirCafé(): number {
        return this._estDysfonctionnel ? 1 : 0;
    }

    public registerMoneyDetectedCallback(callback: (moneyInserted: number) => void): void {
        this._moneyInsertedCallback = callback;
    }

    public SimulerInsertionArgent(prix: Pièce) {
        this._moneyInsertedCallback(prix.ValeurEnCentimes);
    }

    public SimulerDemandeDeSucre() {
        this._sucreAppuyéCallback(true);
    }
}