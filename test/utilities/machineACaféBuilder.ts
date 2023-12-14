import {MachineACafé} from "../../src/machineACafé";
import {HardwareFake} from "./hardwareFake";
import {MachineACaféHarness} from "./machineACaféHarness";

export class MachineACaféBuilder {
    private _estDysfonctionnel: boolean = false;

    public Build(): MachineACaféHarness {
        const hardware = new HardwareFake(this._estDysfonctionnel);
        const machineRéelle = new MachineACafé(hardware);
        return new MachineACaféHarness(machineRéelle, hardware);
    }

    public Dysfonctionnelle() : MachineACaféBuilder {
        this._estDysfonctionnel = true;
        return this;
    }
}