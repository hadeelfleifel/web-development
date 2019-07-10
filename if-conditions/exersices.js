/* 1. Write a JavaScript program that accept two integers and
 * display the larger.Go to the editor */
/******* Start Your Code *********/
 
function large(x,y){
	if (x>y){
  	console.log(x);
  }
  else {
  	console.log(y);
  }	
	}
console.log(large(5,6));

  
 /******* End Your Code ********* */

/* 2. Write a JavaScript conditional statement to find the sign
 of product of three numbers. Display an alert box with the 
 specified sign. Go to the editor 
Sample numbers : 3, -7, 2 
Output : The sign is - */
/******* Start Your Code *********/
function sign(a){
	if (a>=0) {
		return "+";
	}
	else{
		return"-";
	}
}
console.log(sign(3));
console.log(sign(-7));
console.log(sign(2));
  
 /******* End Your Code ********* */

/* 3. Write a JavaScript conditional statement to sort three numbers. Display an alert box to show the result. Go to the editor 
Sample numbers : 0, -1, 4 
Output : 4, 0, -1 */
/******* Start Your Code *********/
  function array (x,y,z){
  	if (x>y && x>z)
{
        if (y>z)
        {
            console.log(x + ", " + y + ", " +z);
        }
        else
        {
            console.log(x + ", " + z + ", " +y);
        }
}
else if (y>x && y >z)
{
        if (x>z)
        {
             console.log(y + ", " + x + ", " +z);
        }
        else
        {
             console.log(y + ", " + z + ", " +x);
        }
}
else if (z>x && z>y)
{
        if (x>y)
        {
            console.log(z + ", " + x + ", " +y);
        }
        else
        {
            console.log(z + ", " + y + ", " +x);
        }
}        

  }

  console.log(array(0,-1,4));
 
 /******* End Your Code ********* */


/*4. Write a JavaScript conditional statement to find the largest of five numbers. 
Display an alert box to show the result. Go to the editor 
Sample numbers : -5, -2, -6, 0, -1 
Output : 0 */

/******* Start Your Code *********/
function large (q,w,e,r,t){
	if (q>w && q>e && q>r && q>t){
		return "max="+q;
		}
		if (w>e && w>r && w>t && w>q){
		return "max="+w;
		}
		if ( e>r && e>t && e>q && e>w){
		return "max="+e;
		}
		if ( r>t && r>q && r>w && r>e){
		return "max="+r;
		}
		return "max="+t;
	}
	console.log(large(-5,-2,-6,0,-1));
	
  
 /******* End Your Code ********* */

 /* 5.Fix the if statement to display "Hello World" if x is greater than y, otherwise alert "Goodbye".*/
/******* Start Your Code *********/
  function large(x,y){
	if (x>y){
  	console.log("HelloWorld");
  }
  else {
  	console.log("GoodBye");
  }	
	}
console.log(large(5,6));
 /******* End Your Code ********* */


/*write the if statement to display "Hello World" if x is greater than y.*/
/******* Start Your Code *********/
  function large(x,y){
	if (x>y){
  	console.log("HelloWorld");
  }
  
	}
console.log(large(5,6));
 /******* End Your Code ********* */


