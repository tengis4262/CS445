// interface BankAccount {
//     money: number;
//     deposit(value: number): void;
// }

abstract class BankAccount {
    money: number;  
    abstract deposit(value: number): void;
}


// class BankAccount {

//     constructor(public money: number){
//     }

//     deposit(value) { 
// 		this.money += value; 
// 	} 
// }

let checkingAccount: BankAccount = {
    money: 2000,
    deposit(value) {
        this.money += value;
    }
};

let myself: {
    name: string,
    bankAccount: BankAccount,
    hobbies: string[]
} = {
    name: "John",
    bankAccount: checkingAccount,
    hobbies: ["Violin", "Cooking"]
};

myself.bankAccount.deposit(3000);
console.log(myself);