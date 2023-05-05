class BankAccount {
    money: number;
    // value: number;
    // constructor(money: number) {
    //     this.money = money;
    // }
    deposit(value:number) {
        this.money += value;
    }
}

let bankAccount:BankAccount = { 
	money: 2000,
	deposit(value:number) { 
		this.money += value; 
	} 
}; 
let myself: {
    name: string;
    bankAccount: BankAccount;
    hobbies: Array<string>;
} = {
    name: "John",
    bankAccount: bankAccount,
    hobbies: ["Violin", "Cooking"]
};

myself.bankAccount.deposit(3000);
console.log(myself);