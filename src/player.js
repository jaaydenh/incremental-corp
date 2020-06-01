export default class Player {
    constructor (moneyCounter) {
        this._moneyCounter = moneyCounter;
    }

    initPlayer () {
        this._money = 0;
        this._last_login = Math.floor(Date.now() / 1000);
        this._companies = [];
        this._companies.push({name: 'Wood', enabled: true, managerHired: false, currentIncome: 0, currentCost: 0});
        this._companies.push({name: 'Food', enabled: false, managerHired: false, currentIncome: 0, currentCost: 0});
        this._companies.push({name: 'Iron', enabled: false, managerHired: false, currentIncome: 0, currentCost: 0});
        this._companies.push({name: 'Gems', enabled: false, managerHired: false, currentIncome: 0, currentCost: 0});
    }

    loadPlayerFromData (playerData) {
        this._money = playerData._money;
        this._last_login = playerData._last_login;
        this._companies = [];
        playerData._companies.forEach(companyData => {
            this._companies.push(companyData);
        });
    }

    set money (newMoney) {
        this._money = newMoney;
    }

    get money () {
        return this._money;
    }

    set last_login (newLogin) {
        this._last_login = newLogin;
    }

    get last_login () {
        return this._last_login;
    }

    openCompany (companyName) {
        let company = this.getCompanyData(companyName);
        company.enabled = true;
    }

    hireManager (companyName) {
        let company = this.getCompanyData(companyName);
        company.managerHired = true;
    }

    setCompanyCurrentIncome (companyName, income) {
        let company = this.getCompanyData(companyName);
        company.currentIncome = income;
    }

    getCompanyCurrentIncome (companyName) {
        let company = this.getCompanyData(companyName);
        return company.currentIncome;
    }

    setCompanyCurrentCost (companyName, cost) {
        let company = this.getCompanyData(companyName);
        company.currentCost = cost;
    }

    getCompanyCurrentCost (companyName) {
        let company = this.getCompanyData(companyName);
        return company.currentCost;
    }

    getCompanyData (companyName) {
        return this._companies.find( ({ name }) => name === companyName );
    }

    isCompanyEnabled (companyName) {
        let company = this.getCompanyData(companyName);
        return company.enabled;
    }

    isManagerHired (companyName) {
        let company = this.getCompanyData(companyName);
        return company.managerHired;
    }

    update (ctx) {
        this._moneyCounter.value = this._money;
    }

    draw (ctx) {

    }
}
