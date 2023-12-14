import {MachineACafé} from "../../src/machineACafé";
import {HardwareFake} from "./hardwareFake";
import {MachineACaféHarness} from "./machineACaféHarness";

export class MachineACaféBuilder {
    public Build(): MachineACaféHarness {
        const hardware = new HardwareFake();
        const machineRéelle = new MachineACafé(hardware);
        return new MachineACaféHarness(machineRéelle, hardware);
    }
}