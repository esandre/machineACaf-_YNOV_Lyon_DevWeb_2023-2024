import {expect} from '@jest/globals';
import type {MatcherFunction} from 'expect';
import {MachineACaféHarness} from "./machineACaféHarness";
import {Pièce} from "../../src/pièce";

const unCaféEstServi: MatcherFunction<[attendu: unknown]> =
    function (actual: unknown) {
        if(!(actual instanceof MachineACaféHarness))
            throw new Error("Only works with MachineACaféHarness");

        const delta = actual.GetDeltaCafésServis();
        const pass = delta == 1;
        const message = pass
            ? `Un café ne devait pas être servi, il l'a été.`
            : `Un café devait être servi, ${delta} l'ont été.`;

        return {
            message: () => message,
            pass: pass
        }
    };

const nCafésSontServis: MatcherFunction<[attendu: unknown]> =
    function (actual: unknown, n: unknown) {
        if(!(actual instanceof MachineACaféHarness))
            throw new Error("Only works with MachineACaféHarness");

        if(typeof n !== 'number')
            throw new Error("Only works with number");

        const delta = actual.GetDeltaCafésServis();
        const pass = delta == n;
        const message = pass
            ? `${n} cafés ne devaient pas être servis, ${delta} l'ont été.`
            : `${n} cafés devaient être servis, ${delta} l'ont été.`;

        return {
            message: () => message,
            pass: pass
        }
    };

const unePièceEstEncaissée: MatcherFunction<[attendu: unknown]> =
    function (actual: unknown, pièce: unknown) {
        if(!(actual instanceof MachineACaféHarness))
            throw new Error("Only works with MachineACaféHarness");

        if(!(pièce instanceof Pièce))
            throw new Error("Only works with Pièce");

        const delta = actual.GetSommeEncaissée();
        const pass = delta == pièce.ValeurEnCentimes;

        const message = pass
            ? `Il ne fallait pas encaisser ${pièce}. ${delta} centimes l'ont été.`
            : `Il fallait encaisser ${pièce}. ${delta} centimes l'ont été.`;

        return {
            message: () => message,
            pass: pass
        }
    };

expect.extend({
    unCaféEstServi,
    nCafésSontServis,
    unePièceEstEncaissée
});