
document.getElementById('Deposit-button').addEventListener('click', function(){
    const depositField = document.getElementById('Deposit-field');
    const ownDeposit = parseFloat(depositField.value);
    
    const previousDeposit = document.getElementById('previous-deposit');
    const ownPreviousDeposit = parseFloat(previousDeposit.innerText);
   
    const confirmDeposit = ownDeposit + ownPreviousDeposit;
    previousDeposit.innerText = confirmDeposit;

    const totalBalance1 = document.getElementById('total-balance');
    const ownTotalBalance = parseFloat(totalBalance1.innerText);
    
    const nowTotalBalance = ownTotalBalance + ownDeposit;
    totalBalance1.innerText = nowTotalBalance;


    depositField.value= '';
})


document.getElementById('Withdraw-button').addEventListener('click', function(){
   const withdrawField = document.getElementById('Withdraw-field');
   const ownWithdraw = parseFloat(withdrawField.value);

   const previousWithdraw = document.getElementById('previous-withdraw');
   const ownPreviousWithdraw = parseFloat(previousWithdraw.innerText);

   const confirmWithdraw = ownPreviousWithdraw + ownWithdraw;
   previousWithdraw.innerText = confirmWithdraw;

   const totalBalance2 = document.getElementById('total-balance');
   const ownTotalBalance2 = parseFloat(totalBalance2.innerText);

   const nowTotalBalance = ownTotalBalance2 - ownWithdraw;
   totalBalance2.innerText = nowTotalBalance;

   withdrawField.value ='';
})