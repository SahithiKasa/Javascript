//export const employeeName = "Netra";


export function customerDetails(name,age){
    return `customerName :${name},Age:${age}`;
}
export function loanEligibility(income){
    return income>25000?"Eligible for loan":
    "Not Eligible for loan";
}

