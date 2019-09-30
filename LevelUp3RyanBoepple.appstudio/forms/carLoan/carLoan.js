function carloan(r,p,n){
  return (((r/12)*p)/(1-(Math.pow((1+(r/12)),-n))))}
  
let interestRate=prompt("Please enter the interest rate of the loan in decimal form (i.e. 5% would be entered as .05).")
let principal=prompt("Please enter the amount of the loan with no commas (i.e. $25,000 would be entered as 25000).")
let loanTime=prompt("Please enter the length of time for the loan in months (i.e. 4 years would be entered as 48).")
let payment=carloan(interestRate,principal,loanTime)
alert(`Your monthly payment would be $ ${parseFloat(payment.toFixed(2))}.`)


