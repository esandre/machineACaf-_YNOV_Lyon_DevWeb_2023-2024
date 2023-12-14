import "./utilities/machineACaféMatchers"
import {Pièce} from "../src/pièce";
import {MachineACaféBuilder} from "./utilities/machineACaféBuilder";

describe('En tant que consommateur, je veux acheter un café, afin de le savourer avec mes collègues exécrables',
    () => {
        test.each([
            [Pièce.CinquanteCents],
            [Pièce.UnEuro],
            [Pièce.DeuxEuros]
        ])("ETANT DONNE une machine à café " +
            "QUAND on insère %s au moins le prix d'un café " +
            "ALORS un café est servi " +
            "ET l'argent est encaissé", (prix: Pièce) => {
            const machine = new MachineACaféBuilder().Build();

            machine.SimulerInsertionArgent(prix);

            // @ts-ignore
            expect(machine).unePièceEstEncaissée(prix);

            // @ts-ignore
            expect(machine).unCaféEstServi();
        });

        test.each([
            [Pièce.UnCentime],
            [Pièce.DeuxCentimes],
            [Pièce.CinqCentimes],
            [Pièce.DixCentimes],
            [Pièce.VingtCentimes]
        ])("ETANT DONNE une machine à café " +
            "QUAND on insère %s, somme inférieure au prix d'un café " +
            "ALORS aucun café n'est servi " +
            "ET l'argent est restitué", (prix: Pièce) => {
            const machine = new MachineACaféBuilder().Build();

            machine.SimulerInsertionArgent(prix);

            // @ts-ignore
            expect(machine).aucuneSommeNEstEncaissée(prix);

            // @ts-ignore
            expect(machine).aucunCaféNEstServi();
        });

        test("ETANT DONNE une machine à café " +
            "QUAND on insère le prix d'un café, 2 fois " +
            "ALORS deux cafés sont servis " +
            "ET l'argent est encaissé", () => {
            const machine = new MachineACaféBuilder().Build();
            const prix = Pièce.CinquanteCents;

            machine.SimulerInsertionArgent(prix);
            machine.SimulerInsertionArgent(prix);

            // @ts-ignore
            expect(machine).unePièceEstEncaissée(Pièce.UnEuro);

            // @ts-ignore
            expect(machine).nCafésSontServis(2);
        })
    });