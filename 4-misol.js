var BankAccount = /** @class */ (function () {
    function BankAccount(accountNumber, ownerName, balance) {
        this.accountNumber = accountNumber;
        this.ownerName = ownerName;
        this.balance = balance;
    }
    BankAccount.prototype.getBalance = function () {
        console.log(this.balance);
    };
    BankAccount.prototype.deposit = function (amount) {
        this.balance = this.balance + amount;
    };
    BankAccount.prototype.withdraw = function (amount) {
        this.balance = this.balance - amount;
    };
    BankAccount.prototype.getName = function () {
        console.log(this.ownerName);
    };
    BankAccount.prototype.setName = function (name) {
        this.ownerName = name;
    };
    BankAccount.bankName = "Mikrokreditbank";
    return BankAccount;
}());
