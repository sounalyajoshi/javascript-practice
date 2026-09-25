class BankAccount{
    #balance;  // its private property 
    
    constructor(balance){
        this.#balance=balance;
    }

deposite(amount){
    this.#balance +=amount;
}



withdraw(amount){
    this.#balance -=amount;
}
getBalance(){
    return this.#balance;
}


}

const  studentAccount=new BankAccount(2000);
studentAccount.deposite(1000);
console.log("balance after deposite:",studentAccount.getBalance());

studentAccount.withdraw(200);
console.log("balance after withdraw:",studentAccount.getBalance());