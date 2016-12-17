// var account = {
// 	balance : 0
// }

var accounts = [
	{
		balance : 0,
		username: "Jack"
	}
];

function createAccount(account){
	accounts.push(account);
	console.log("You just added ", account[1] , " to the accounts");
	return account;
}

function getAccount(username){
	for (i = 0; i < accounts.length; i++){
		if (accounts[1] == username) {
			console.log("You found username ", username);
			return username; 
		} else {
			console.log("The username ", username, " was not found!");
			return null;
		}
	}
}

var isInDebt = false;

function deposit(account, amount){
	console.log("the deposit amount is ", amount);
	var newAmount = account.balance + amount;
	//or account.balance =+ amount;
	account.balance = newAmount;
	console.log("the new balance is ", newAmount);
	if (account.balance > 0){
		isInDebt = false;
	}
	return newAmount; //not required
}

function withdraw(account, amount){
	console.log("the withdraw amount is ", amount);
	var newAmount = account.balance - amount;
	//or account.balance =- amount;
	account.balance = newAmount;
	console.log("the new balance is ", newAmount);
	if (account.balance < 0){
		isInDebt = true;
	}
	return newAmount; //not required
}

function getBalance(account){
	console.log("the current balance is ", account.balance);
	if (isInDebt){
		console.log("Your balance is in the negative, you owe $", account.balance);
	} else {
		console.log("Your balance is in the positive, you have $", account.balance);
	}
	return account.balance;
}

//tests
createAccount(100,"Lilia");
getAccount("Lilia");

deposit(account,12);
withdraw(account,6);
getBalance(account);

withdraw(account,26);
getBalance(account);

deposit(account,36);
getBalance(account);