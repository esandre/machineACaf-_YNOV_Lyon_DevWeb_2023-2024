export interface HardwareInterface{
    servirCafé(): number; // 0 si tout ok, sinon erreur
    registerMoneyDetectedCallback(callback: (moneyInserted: number) => void): void;
}