/*  Starting pseudocode

Each user is an object, so we can store each user in a variable creatively named 'user'

we will use 4 properties of the user object: pricePerRefill, refills, subscription, and coupon 

we need to get 3 total amounts in order to return the final amount

First, we must get the initial total by multiplying the pricePerRefill by the amount of refills.
    This initial total will be stored in variable initialTotal, and that variable itself will be a result of a function 

Second, we must get the total that is the difference between the initial Total and the subscription discount.
    So, we can create another function that will take the initialTotal found above as a parameter. If the user has a subscription, 
    this function will find the subscription discount that is the product of the initialTotal and 0.25 and return that 
    If the user is not a subscriber, then the discountedTotal will be the same as the initialTotal.

Third, we must get the total that is the difference between the discountedTotal and 10 if the user has a coupon, and store that 
    return value in a variable finalAmount. 
    If they don't have a coupon, then finalAmount will be the same as discountedTotal. 

Lastly, we will use the finalAmount when returning and console-logging the final string value.

*/

//starting code
const timmy = {
    prescription: "acetaminophen",
    pricePerRefill: 25,
    refills: 3,
    subscription: false,
    coupon: true,
};

const sarah = {
    prescription: "diphenhydramine",
    pricePerRefill: 50,
    refills: 1,
    subscription: true,
    coupon: false,
}

const rocky = {
    prescription: "phenylephrine",
    pricePerRefill: 30,
    refills: 5,
    subscription: true,
    coupon: true,
}

/* 
We have 3 customers to find the final total for, 
so we can create a variable (user) and assign it the value of the name of each customer 
that we want to test

---------------------------------- FOR PEER-REVIEW ----------------------------------
reassign user to have whichever customer you want to test (timmy, sarah, rocky)
*/

let user = timmy;

/*
For all customers, the product of the pricePerRefill * refills will be used
and the value can be stored in the variable, startingTotal
*/

function getStartingTotal(user) {
    const startingTotal = user.pricePerRefill * user.refills;
    return startingTotal;
}

/*
 Store the value of the getStartingTotal function in a variable that 
 can then be used in the other functions below 
*/

const initialTotal = getStartingTotal(user);
console.log(`The starting total is: ${initialTotal}.`);

/*
After finding the startingTotal, we can create a function that will handle 
the discounted total if the user has a subscription 
*/

function getSubDiscountTotal(initialTotal) {
    // if the user has a subscription
    if (user.subscription){
        const discount = initialTotal * 0.25;
        console.log(`Your subscription discount is ${discount}.`);
        const discountedTotal = initialTotal - discount;
        return discountedTotal;
    // if the user does not have a subscription
    } else {
        const discountedTotal = initialTotal;
        return discountedTotal;
    }
}

/*
 If the user does not have a subscription, then their discountedTotal 
 should be equal to their initialTotal.
*/

const subDiscountTotal = getSubDiscountTotal(initialTotal);
console.log(`The subscription-discounted total is: ${subDiscountTotal}.`);

/* 
After getting the total after the subscription discount, we can 
subtract 10 from that total if the user has a coupon. 
If no coupon, then the price is unaffected
*/

function getCouponDiscount(subDiscountTotal){
    // if user has coupon, subtract 10 from their subDiscountTotal
    if(user.coupon){
        const finalAmount = subDiscountTotal - 10;
        return finalAmount;
    } else {
    // if user does not have coupon, finalAmount is same as subDiscountTotal
        const finalAmount = subDiscountTotal;
        return finalAmount;
    };
};

const finalAmount = getCouponDiscount(subDiscountTotal);
console.log(`Your grand total is $${finalAmount}.`);


