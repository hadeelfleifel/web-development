/*
 * Programming Quiz: Out to Dinner 
 * Create a variable called bill and assign it the result of 10.25 + 3.99 + 7.15 (don't perform the calculation yourself, let JavaScript do it!). Next, create a variable called tip and assign it the result of multiplying bill by a 15% tip rate. Finally, add the bill and tip together and store it into a variable called total.
 * Print the total to the JavaScript console.
 * Hint: 15% in decimal form is written as 0.15_._
 * TIP: To print out the total with a dollar sign ( $ ) use string concatenation. To round total up by two decimal points use the toFixed() method. To use toFixed() pass it the number of decimal points you want to use. For example, if total equals 3.9860, then total.toFixed(2) would return 3.99.
 */

// your code goes here
  
  
 var bill=10.25 + 3.99 + 7.15;
 var tip=bill*(15/100);
 var total=bill+tip;

 console.log("total is "+total+"$");
