import {MachineACafé} from "../../src/machineACafé";
import {HardwareFake} from "./hardwareFake";
import {MachineACaféHarness} from "./machineACaféHarness";
import {ProduitsEnum} from "./produits.enum";

export class MachineACaféBuilder {
    private _estDysfonctionnel: boolean = false;
    private _produit: ProduitsEnum = ProduitsEnum.CAFE;

    public Build(): MachineACaféHarness {
        const hardware = new HardwareFake(this._estDysfonctionnel);

        if(this._produit == ProduitsEnum.CAFE_SUCRE) {
            hardware.SimulerDemandeDeSucre();
        }

        const machineRéelle = new MachineACafé(hardware);
        return new MachineACaféHarness(machineRéelle, hardware);
    }

    public Dysfonctionnelle() : MachineACaféBuilder {
        this._estDysfonctionnel = true;
        return this;
    }

    public ParamétréePourLeProduit(produit: ProduitsEnum) : MachineACaféBuilder {
        this._produit = produit;
        return this;
    }
}