import {MachineACaféInterface} from "../../src/machineACafé.interface";
import {Pièce} from "../../src/pièce";
import {HardwareInterface} from "../../src/hardware/hardware.interface";
import {HardwareFake} from "./hardwareFake";

export class MachineACaféHarness implements MachineACaféInterface {
    private _machineACafé: MachineACaféInterface;
    private _hardware: HardwareFake;
    private _sommeEncaisséeInitiale: number;
    private _cafésServisInitiaux: number;

    public constructor(machineACafé: MachineACaféInterface,
                       hardware: HardwareFake) {
        this._machineACafé = machineACafé;
        this._hardware = hardware;
        this._sommeEncaisséeInitiale = machineACafé.GetSommeEncaissée();
        this._cafésServisInitiaux = machineACafé.GetNombreCafésServis();
    }

    public GetDeltaSommeEncaissée() {
        return this.GetSommeEncaissée() - this._sommeEncaisséeInitiale;
    }

    public GetDeltaCafésServis() {
        return this.GetNombreCafésServis() - this._cafésServisInitiaux;
    }

    GetSommeEncaissée(): number {
        return this._machineACafé.GetSommeEncaissée();
    }
    GetNombreCafésServis(): number {
        return this._machineACafé.GetNombreCafésServis();
    }

    SimulerInsertionArgent(prix: Pièce) {
        this._hardware.SimulerInsertionArgent(prix);
    }
}