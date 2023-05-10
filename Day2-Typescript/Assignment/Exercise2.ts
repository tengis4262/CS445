let bankAccount:{
    money:number;
    deposit(value:number):void
    // deposit :(value:number)=>void;
} = {
    money:2000,
    deposit(value){
        this.money +=value;
    }
};

let myself :{
    name:string;
    bankAccount : typeof bankAccount,
    //hobbies:string[];
    //hobbies:Array<string>;
    hobbies :[string,string];
} = {
    name : 'John',
    bankAccount : bankAccount,
    hobbies :["Violin", "Cooking"]
};

myself.bankAccount.deposit(3000);
console.log(myself)