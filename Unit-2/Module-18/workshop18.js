/*
For each of the prompts, identify the expectations and then write tests useful for the prompt
  - Take edge cases into account
  - Avoid extraneous tests 
*/

/*

--------------
* Unit Tests
--------------


*Prompt 1: Multiplication function 


Expect multiplication(2, 3) to be a number 

Expect multiplication(2, 3) to be equal to 6
Expect multiplication(1,0) to be equal to 0
Expect multiplication (1,-1) to be equal to -1
Expect multiplication (-1,-1) to be equal to 1

Expect multiplication("a", 3) to be an error
Expect multiplication(2, 3, 4) to be an error 
Expect multiplication(2) to be an error


*Prompt 2: concatOdds function

Expect concatOdds([1, 2, 3], [4, 5, 6]) to be a single array
Expect concatOdds([1, 1, 2, 3], [4, 5, -55, 5, 5, 6]) to be [-55, 1, 3, 5]

Expect concatOdds([1, 2, 3], [4, 5, [6]]) to be an error 
Expect concatOdds([1, 2, {3}], [4, 5, 6]) to be an error 
Expect concatOdds([1, 2, c], [4, 5, 6]) to be an error 
Expect concatOdds([1, 2, 3]) to be an error 

--------------
* Functional Tests
--------------

*Prompt 1: Shopping Cart 

1) When a user clicks 'Checkout' while signed in and has a cart with 1 item or more, they should be shown a small success notification to indicate the button was pressed
before they are redirected to a page prompting them to fill out shipping, billing, and payment information, and finally an option to place the order at the bottom.
    1a) When a user successfully fills out the shipping, billing, and payment information, they should be prompted on whether they wish to save that information to their account or not, 
      and then they should be able to click the 'Place Order' button at the bottom that will redirect them to a new page describing the order details.
    1b) When a user fails to fill out the shipping, billing, or payment information properly, 
      the order is not placed and a visible error should be shown that prompts user to correct erroneous information before placing the order again.

2) When a user clicks 'Checkout' while signed in without any items in their cart, they should not be redirected to a new page and instead they should be shown an error prompting them to add an item to their cart before checking out.

3) When a user clicks 'Checkout' while not being signed in with items in cart, they should be prompted to either create an account, log in, or proceed to the checkout page. 
    3a) When user clicks on Create an Account, they should be redirected to the account creation page, and then redirected to the checkout page after they have made an account.
    3b) When user clicks on Log In, they should be redirected to the Log In page, and then redirected to the checkout page after they have logged in.
    3c) When user clicks on 'Proceed to Checkout', they should be redirected to the checkout page prompting them to fill out shipping, billing, and payment information.
        3c.1) When user successfully fills out the shipping, billing, and payment information, there should not be a prompt to save the information to their account,
          and then they should be able to click the 'Place Order' button at the bottom that will redirect them to a new page describing the order details.
        3c.2) When user fails to fill out the shipping, billing, or payment information properly, 
          the order is not placed and a visible error should be shown that prompts user to correct erroneous information before placing the order again.

4) When a user clicks 'Checkout' while not signed in and without any items in their cart, they should be shown an error prompting them to add an item to their cart before checkout
   as well as a prompt to either create an account, sign in, or return to the page that they were originally on. 
*/