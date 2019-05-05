let bankBalance = 1200;

function toWithdraw() {
  let takeOut = prompt('How much would you like to withdraw?');
  let withdrawNum = parseInt(takeOut);

  if (withdrawNum > bankBalance) {
    alert('You cannot withdraw more than the amount in your balance. Please enter a new amount.');
  } else {
    alert(`You've successfully withdrawn $${takeOut} from your account.`);
    bankBalance -= withdrawNum;
  };
}

function toDeposit() {
  let putInBank = prompt(`How much would you like to deposit?`);
  let depositNum = parseInt(putInBank);

  if (depositNum > 50000) {
    alert('The maximum amount you can deposit at any one time is $50,000. Please enter a new amount.');
  } else {
    alert(`You've successfully deposited $${putInBank} to your account.`);
    bankBalance += depositNum;
  };
}

function askCustomer() {
  let action = prompt(`Please enter 'B' to check your balance, 'D' to make a deposit, 'W' to make a withdrawal, or 'Q' to quit the application.`);

  switch (action) {
    case 'Q':
    case 'q':
      exit();
      break;
    case 'W':
    case 'w':
      toWithdraw();
      askCustomer();
      break;
    case 'D':
    case 'd':
      toDeposit();
      askCustomer();
      break;
    case 'B':
    case 'b':
      alert(`Your current balance is $${bankBalance}.`);
      askCustomer();
      break;
    default:
      alert(`We're sorry. The action you requested cannot be performed. Please enter 'B' to check your balance, 'D' to make a deposit, 'W' to make a withdrawal, or 'Q' to quit the application.`);
      break;
  }
}

askCustomer();
