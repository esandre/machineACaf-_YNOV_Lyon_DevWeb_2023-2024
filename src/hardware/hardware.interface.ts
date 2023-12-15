export interface HardwareInterface{
    servirCafé(): number; // 0 si tout ok, sinon erreur
    registerMoneyDetectedCallback(callback: (moneyInserted: number) => void): void;
    registerBoutonSucreAppuyéCallback(callback: (newState: boolean) => void): void;

    // SUCRE
    ajouterDoseSucre(): number; // 0 = ok, > 0 = ko

    // ALLONGE
    //ajouterDoseEau(): number; // 0 = ok, > 0 ko

    // DETECTION + GOBELETS
    //faireTomberGobelet(): number; // 0 = ok, > 0 ko
    //getTasseDétectée(): boolean;
}