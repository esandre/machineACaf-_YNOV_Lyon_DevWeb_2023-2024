import {Pièce} from "./pièce";
import {HardwareInterface} from "./hardware/hardware.interface";
import {MachineACaféInterface} from "./machineACafé.interface";

export class MachineACafé implements MachineACaféInterface {
    private _argentEncaissé = 0;
    private _cafésServis = 0;
    private _hardware;

    public constructor(hardware: HardwareInterface) {
        this._hardware = hardware;

        hardware.registerMoneyDetectedCallback(
            montant => this.Insérer(Pièce.FromMontant(montant))
        );
    }

    public GetSommeEncaissée(): number {
        return this._argentEncaissé;
    }

    private Insérer(prix: Pièce) : void {
        if(prix.ValeurEnCentimes < Pièce.CinquanteCents.ValeurEnCentimes)
            return;

        const résultat = this._hardware.servirCafé();
        if(résultat != 0) return;

        this._argentEncaissé += prix.ValeurEnCentimes;
        this._cafésServis ++;
    }

    public GetNombreCafésServis() {
        return this._cafésServis;
    }
}