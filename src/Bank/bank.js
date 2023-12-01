// bank balance project
// --------------------------------------------------------------------------------
let toastmsg = "please enter a valid number";
function getinputvalue(idinput) {
  const inputElement = document.getElementById(idinput);
  let deposit_amount = document.getElementById("deposit-amount");
  let inputvalue = Number(inputElement.value);

  if (inputvalue > 0) {
    deposit_amount.innerText =
      inputvalue + parseFloat(deposit_amount.innerText);
    updateBalanceAmount("balance-amount", inputvalue);
  } else {
    alert(toastmsg);
  }
  inputElement.value = "";
}

document.getElementById("deposit-btn").addEventListener("click", function () {
  getinputvalue("deposit-input");
});
// ------------------------------------------------------------------------------
// function

let updateBalanceAmount = function (balanceId, deposit_amount) {
  console.log(updateBalanceAmount());
  let balanceAmount = document.getElementById(balanceId);
  let total = parseFloat(balanceAmount.innerText);
  return balanceAmount.innerText = parseFloat(deposit_amount) + total;
  // console.log(balanceAmount.innerText);
};
 
document.getElementById("withdraw-btn").addEventListener("click", function () {
  let withdrawInputID = document.getElementById("withdraw-input");

  if (withdrawInputID.value > 0) {
    let withdraw = document.getElementById("withdraw-amount");
    if (withdrawInputID.innerText <= updateBalanceAmount.value) {
      let withdrawamount = parseFloat(withdraw.innerText);
      withdraw.innerText = parseFloat(withdrawInputID.value) + withdrawamount;
      let withdrawInputID = document.getElementById("withdraw-input");
    } else {
      alert("your entered amount less then balance");
    }
  } else {
    alert(toastmsg);
  }
  withdrawInputID.value = "";
});

//  function x(){
//   y()
//   console.log( 'x')
//  }
// function Y(){
//   console.log('y')
// }
// // function updateTotalAmount() {}
// log(x)
// log(y)
// y()
// x()

// ajket classs
// there is three way to handle asynchonours
// callback  promise asyncawait
// when promise is keep is it is called resoleved

// --------------------------------------------------------------------------------------

//  let arr =['athik','omorfarouk','karim','babo']

//  for(let i = 0;i<=arr.length;i++){

// let resutl = Math. floor(Math.random() *arr.length)
// // console.log(resutl)
// console.log(arr[resutl])
//
