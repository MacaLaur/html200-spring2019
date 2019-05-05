let bankBalance = 1200;

function toWithdraw() {
  let takeOut = prompt('How much would you like to withdraw?');
  alert(`You've successfully withdrawn $${takeOut} from your account.`);
  let withdrawNum = parseInt(takeOut);
  bankBalance -= withdrawNum;
}

function toDeposit() {
  let putInBank = prompt(`How much would you like to deposit?`);
  alert(`You've successfully deposited $${putInBank} to your account.`);
  let depositNum = parseInt(putInBank);
  bankBalance += depositNum;
}

function askCustomer() {
  let action = prompt('What would you like to do?');

  switch (action) {
    case 'Q':
      exit();
      break;
    case 'W':
      toWithdraw();
      askCustomer();
      break;
    case 'D':
      toDeposit();
      askCustomer();
      break;
    case 'B':
      alert(`Your current balance is $${bankBalance}.`);
      askCustomer();
      break;
    default:
      alert(`We're sorry. The action you requested cannot be performed. Please enter 'B' to check your balance, 'D' to make a deposit, 'W' to make a withdrawal, or 'Q' to quit the application.`);
      break;
  }
}

askCustomer();
