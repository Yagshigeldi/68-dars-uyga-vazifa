class BankAccount {
    readonly accountNumber: string;
    public ownerName: string;
    private balance: number
    static bankName: string = "Mikrokreditbank";
    constructor(accountNumber: string, ownerName: string, balance: number) {
        this.accountNumber = accountNumber;
        this.ownerName = ownerName;
        this.balance = balance;
    }

    getBalance() {
        console.log(this.balance);
    }

    deposit(amount: number) {
        this.balance = this.balance + amount;
    }

    withdraw(amount: number) {
        this.balance = this.balance - amount;
    }

    getName() {
        console.log(this.ownerName);
    }

    setName(name: string) {
        this.ownerName = name;
    }
};