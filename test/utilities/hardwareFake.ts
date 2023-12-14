import {HardwareInterface} from "../../src/hardware/hardware.interface";
import {Pièce} from "../../src/pièce";

export class HardwareFake implements HardwareInterface {
    private readonly _estDysfonctionnel: boolean;

    constructor(estDysfonctionnel: boolean) {
        this._estDysfonctionnel = estDysfonctionnel;
    }

    private _callback: (moneyInserted: number) => void = () => {};

    public servirCafé(): number {
        return this._estDysfonctionnel ? 1 : 0;
    }

    public registerMoneyDetectedCallback(callback: (moneyInserted: number) => void): void {
        this._callback = callback;
    }

    public SimulerInsertionArgent(prix: Pièce) {
        this._callback(prix.ValeurEnCentimes);
    }
}