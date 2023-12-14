export interface HardwareInterface{
    servirCafé(): number;
    registerMoneyDetectedCallback(callback: (moneyInserted: number) => void): void;
}