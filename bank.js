var account = {
	balance : 0
}

function deposit(account, amount){
	console.log("the deposit amount is ", amount);
	var newAmount = account.balance + amount;
	account.balance = newAmount;
	console.log("the new balance is ", newAmount);
	return newAmount;
}

function withdraw(account, amount){
	console.log("the withdraw amount is ", amount);
	var newAmount = account.balance - amount;
	account.balance = newAmount;
	console.log("the new balance is ", newAmount);
	return newAmount;
}

function getBalance(account){
	console.log("the current balance is ", account.balance);
	return account.balance;
}

//tests
deposit(account,12);
withdraw(account,6);
getBalance(account);