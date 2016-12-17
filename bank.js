// var account = {
// 	balance : 0
// }

var accounts = [];

function createAccount(account){
	accounts.push(account);
	console.log("You just added ", account , " to the accounts");
	return account;
}

function getAccount(username){
	var matchedAccount;
	// for (i = 0; i < accounts.length; i++){
	accounts.forEach(function(account){
		if (account.username === username) {
			//console.log("You found username ", username);
			matchedAccount = account;
		} else {
			//console.log(username, " was not found.");
		}
		
	});
	return matchedAccount; 
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
var liliasAccount = createAccount({username:"Lilia",balance:100});


deposit(liliasAccount,12);
withdraw(liliasAccount,6);
getBalance(liliasAccount);

var jacksAccount = createAccount({username:"Jack",balance:120});
//getAccount('Jack');

withdraw(jacksAccount,26);
getBalance(jacksAccount);

deposit(jacksAccount,36);
getBalance(jacksAccount);

console.log("Accounts should be ",accounts);

var existingAccountLilia = getAccount('Lilia');
console.log("Looking for Lilias account",existingAccountLilia);
var existingAccountJack = getAccount('Jack');
console.log("Looking for Jacks account",existingAccountJack);

var jensAccount = createAccount({
	username: 'jen001',
	balance: 12
});

console.log(accounts);

var exitingJensAccount = getAccount('jen001');
console.log(exitingJensAccount);