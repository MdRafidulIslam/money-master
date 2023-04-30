function updateValue() {
  let incomeText = document.getElementById('income').value;
  let incomeValue = parseFloat(incomeText);
  return incomeValue;

}



function calculateexpense() {

  let incomeValue = updateValue();

  let foodText = document.getElementById('food').value;
  let foodValue = parseFloat(foodText);

  let rentText = document.getElementById('rent').value;
  let rentValue = parseFloat(rentText);

  let clothsText = document.getElementById('clothes').value;
  let clothesValue = parseFloat(clothsText);

  let totalExpenseText = document.getElementById('total-expense');
  let totalExpenseValue = parseFloat(totalExpenseText.innerText);

  let totalValue = foodValue + rentValue + clothesValue;
  totalExpenseText.innerText = totalValue;

  let balanceText = document.getElementById('balance');
  let balanceValue = parseFloat(balanceText.innerText);

  let totalBalance = incomeValue - totalValue;
  balanceText.innerText = totalBalance;

}

function calculateSavings() {
  let saveText = document.getElementById('save');
  let saveValue = parseFloat(saveText.value);
  let incomeValue = updateValue();

  let savingText = document.getElementById('saving-amount');
  let savingValue = parseFloat(savingText.innerText);

  let saveTotal = (incomeValue / 100) * saveValue;
  savingText.innerText = saveTotal;

  let remainingText = document.getElementById('remaining-balance');
  let remainingValue = parseFloat(remainingText.innerText);

  let balanceText = document.getElementById('balance');
  let balanceValue = parseFloat(balanceText.innerText);
  console.log(balanceValue)
  console.log(saveTotal)

  let savingTotal = balanceValue - saveTotal;

  remainingText.innerText = savingTotal;


}