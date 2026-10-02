let balance = 50000;
let withdrawalAmount = 10000;
let pin = 1234;
let enteredPin = 1234;

//=== means strict equqlity operator which checks both the value and the data types
//== means loose equqlity operator which checks wheather two values are equal and javascript may convert their data types before comparing them
if (enteredPin === pin) {
  if (withdrawalAmount > balance) {
    console.log("Insufficient funds");
  } else {
    balance = balance - withdrawalAmount;
    console.log("Remaining balance:", balance);
  }
} else {
  console.log("Incorrect pin");
}
//bonus- atm menu with switch
//switch choose between options
//case gives a possible choice
//break stops the switch
//default runs when none of the cases match
let option = 1;
let depositAmount = 5000;
switch (option) {
  case 1:
    console.log("your balance is:");
    break;
  case 2:
    if (withdrawalAmount > balance) {
      console.log("Insufficient funds");
    } else {
      balance = balance - withdrawalAmount;
      console.log("Withdrawal successful. Remaining balance:", balance);
    }
    break;
  case 3:
    balance = balance + depositAmount;
    console.log("Deposit successful. Remaining balance:", balance);
    break;
  case 4:
    console.log("thank you for using the atm. Goodbye!");
    break;
  default:
    console.log("invalid option");
}
