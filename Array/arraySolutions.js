console.log('Here is : ', 'array')



/*
1
Correct the syntax error
 [ 1,7  9  45, ]

 ["Str" "alex","moh"

 'the','fox' 'over' lazy, 'dog',  ]

*/
[1,7,9,45]
["Str","alex","moh"]
['the','fox', 'over' ,'lazy', 'dog']


/*
2
What the index of "Banana","Tomato"
var fruits=["Tomato","Banana","Watermelon"]

*/
fruits[1] // Banana
fruits[0] // Tomato


/*
3
Create an array represents your:
1- Favorite Food (5)
2- Favorite Sport (3)
3- Favorite Movie (4)
*/
Food=["mansaf","shawrma","fatoosh","dawali","pizza"];
Soprt=["swim","football","golf"];
Movie=["spoongbob","looz & sokkar","sally"];

/*
4
Create a function called firstOfArray
that take an array as a parameter
and return the first element in an array

Ex: firstOfArray([1,4,5]) => 1
Ex: firstOfArray(["t","u","g","x"]) => "t"
*/
 function firstOfArray(x){
 	arr=x[0];
 	return arr;
 }console.log(firstOfArray([1,4,5]));
/*
5
Create a function called lastOfArray
that take an array as a parameter
and return the first element in an array

Ex: lastOfArray([1,4,5]) => 5
Ex: lastOfArray(["t","u","g","x"]) => "x"
*/
function lastOfArray (z){
	arr=z[z.length-1];
 	return arr;
 }console.log(lastOfArray([1,4,5]));


/*
6
Using console make this array to be like this one (push, unshift, shift, pop)

var array = [0,5,7,9]
=> [1,3,4,6,8,9,10]
*/
var array = [0,5,7,9]
array.shift();//0 [5,7,9]
array.shift();//5 [7,9]
array.shift();//7 [9]
array.push(10);//[9,10]
array.unshift(1,3,4,6,8); // [1,3,4,6,8,9,10]


/*
7
Using the console try to figure out what the thing thats (push, unshift, shift, pop) return to you

var array2 = [5,9,-7,3.5]
*/
var array2 = [5,9,-7,3.5];
array2.shift();//[9,-7,3.5]
array2.unshift(5);//[5,9,-7,3.5]
array2.pop();//[5,9,-7]
array2.push(3.5);//[5,9,-7,3.5]



/*
8
Create a function called middleOfArray
that take an array as a parameter
and return the middle element in an array if it is have an odd elemnets
and return the two middle elemnt in an array if it is have an even elemnets

Ex: middleOfArray([1,4,5]) => 4
Ex: middleOfArray(["t","u","g","x"]) =>"u and g"
*/
function middleOfArray (m){
lng= m.length;
if(lng %2 != 0){
a= Math.floor(m.length/2);
return m[a];
}else {
	b=(m.length/2)-1;
	a=m.length/2;
	
	return m[b]+" and "+m[a];
}}
console.log(middleOfArray([1,4,5]));
console.log(middleOfArray(["t","u","g","x"]));
/*
9
Using assignment operator (=)
make the animals array have these animals
var animals = ['cat', 'ele', 'bird']
animals; => ['zebra', 'elephant']
** hint: animals[0]=something


var nums= [1,2,3,8,9]
nums => [5,-22,3.5,44,98,44]
*/
var animals = ['zebra', 'elephant'];
animals[0]=['cat'];
animals[1]=['ele'];
animals[2]=['bird'];

/*
10
Create a function called indexOfArray
that accept an array and index
and return what this array have in this index

var nums= [1,2,3,8,9]
Ex: indexOfArray(nums,3) => 8
Ex: indexOfArray(nums,1) => 2
Ex: indexOfArray(nums,4) => 9

**try more cases by your self
*/
function indexOfArray(m,n){
	return m[n];
}
console.log(indexOfArray([1,2,3,8,9],2));


/*
11
Create a function called arrayExceptLast
that accept an array
and return the entire array except the last elemnt
** hint: search abou the function that will cut the array on MDN
var nums= [1,2,3,8,9]
Ex: arrayExceptLast(nums) =>  [1,2,3,8]

**try more cases by your self
*/
function arrayExceptLast(v){
	v.pop();
	return v;
}
console.log(arrayExceptLast([1,2,3,4,5]));


/*
12
Create a function called addToEnd
that accept an array and value
and return the entire array with add this value to the end of this array

var nums= [1,2,3,8,9]
Ex: addToEnd(nums,55) =>  [1,2,3,8,55]

**try more cases by your self
*/
function addToEnd (arr,val){
	arr.pop();
	arr.push(val);
	return arr;
}console.log (addToEnd([1,2,3,4],5));

// all the exercises below should solved 2 times: 1- for loop 2- while lopp
/*
13
Create a function called sumArray
that accept an array
and return the summation of all elemnt in this array

var nums= [1,2,3,8,9]
Ex: sumArray(nums) => 23

** solve it one time using for loop and another using while loop
**try more cases by your self
*/
sum=0;
function sumArray (arr){
	for(i=0;i<arr.length;i++){
		sum=sum+arr[i];
		
	}return sum;
}
console.log(sumArray([1,2,3,4,5]));

function sumArray (arr){
	i=0;
	while (i<arr.length){
		sum=sum+arr[i];
		i++;
	}return sum;
}console.log(sumArray([1,2,3,4,5]));


/*
14
Create a function called minInArray
that accept an array
and return the minimum value inside this array

var nums= [1,2,3,8,9]
Ex: minInArray(nums) => 1

** solve it one time using for loop and another using while loop
**try more cases by your self
*/
function minInArray (arr){
	min=arr[0]
	for (i=1;i<arr.length;i++){
		if(arr[i]<min){
			min=arr[i];
		}}return min;
	}console.log(minInArray([2,5,4,1]));

	function minInArray (arr){
		i=1;
		while (i<arr.length){
			if (arr[i]<arr[i-1]){
				min=arr[i];
			} i++;
		}return min;
	}console.log(minInArray([2,5,4,1]));

/*
15
Create a function called removeFromArray
that accept an array and elemnt to remove
and return the array after remove this elemnt from it

var nums= [1,2,3,8,9]
Ex: minInArray(nums,8) => [1,2,3,9]

** solve it one time using for loop and another using while loop
**try more cases by your self
*/
function removeFromArray (arr,ele){
	for (i=0;i<arr.length;i++){
		if (arr[i]==ele){
			arr.splice(i,1);
		}
	}return arr;

}console.log(removeFromArray([1,2,3,4],4));


function removeFromArray (arr,ele){
	i=0;
	while(i<arr.length){
		if (arr[i]==ele){
			arr.splice(i,1);
		}i++;
	}return arr;
}console.log(removeFromArray([1,2,3,4],4));


/*
16
Create a function called oddArray
that accept an array
and return an array have only the odd elemnts

var nums= [1,2,3,8,9]
Ex: oddArray(nums) => [1,3,9]

** solve it one time using for loop and another using while loop
**try more cases by your self
*/
function oddArray(arr){
	var arr1=[];
	for (i=0;i<arr.length;i++){
		if (arr[i]%2==1){
			arr1.push(arr[i]);

		}
	}return arr1;

}console.log(oddArray([1,2,3,8,9]));

function oddArray(arr){
	var arr1=[];
	i=0;
	while(i<arr.length){if (arr[i]%2==1){
			arr1.push(arr[i]);

		}i++;

	}return arr1;
}console.log(oddArray([1,2,3,8,9]));

/*
17
Create a function called aveArray
that accept an array
and return the average of the numbers inside this array

var nums= [1,2,3,8,9]
Ex: aveArray(nums) => 4.6

var nums2= [1,2,3,8,9,77]
Ex: aveArray(nums) => 16.6

** solve it one time using for loop and another using while loop
**try more cases by your self
*/
sum=0;
function aveArray(arr){
	for(i=0;i<arr.length;i++){
		sum=sum+arr[i];
	}
	avg = sum/arr.length;
	return avg;

}console.log(aveArray([1,2,3,8,9]));


sum=0;
function aveArray(arr){
	i=0;
	while(i<arr.length){
		sum=sum+arr[i];
		i++;
	}avg = sum/arr.length;
	return avg;
}console.log(aveArray([1,2,3,8,9]));

/*
18
Create a function called shorterInArray
that accept an array of strings
and return the shortest string inside this array (first)

var strings= ["alex","mercer","madrasa","rashed2","emad","hala"]
Ex: shorterInArray(strings) => "alex"

** solve it one time using for loop and another using while loop
**try more cases by your self
*/
function shorterInArray(arr){
	arr1=arr[0];
	for(i=1;i<arr.length;i++){
		if (arr[i].length<=arr1.length){
			return arr[i];
		}
	}
}console.log(shorterInArray(["air","tr","car","github","by"]));

function shorterInArray(arr){
	arr1=arr[0];
	i=1;
	while(i<arr.length){
		if (arr[i].length<=arr1.length){
	
			return arr[i];
	}i++;
}}console.log(shorterInArray(["air","tr","car","github","by"]));


/*
19
Create a function called repeatChar
that accept a string and char
and return the times that this char repeat inside this string

var string= "alex mercer madrasa rashed2 emad hala"
Ex: repeatChar(string,"a") => 6
Ex: repeatChar(string,"z") => 0

** solve it one time using for loop and another using while loop
**try more cases by your self
*/
function repeatChar (str,ch){
	count=0;
	for(i=0;i<str.length;i++){ 
		if(str.charAt(i)==ch)
			{count+=1;}
	}return count

}console.log(repeatChar("alex mercer madrasa rashed2 emad hala",'a'));



/*
20
Create a function called evenIndexOddLength
that accept an array of strings
and return a new array that have the string with odd length in even index

var strings= ["alex","mercer","madrasa","rashed2","emad","hala"]
Ex: evenIndexOddLength(strings) => ["madrasa"]

** solve it one time using for loop and another using while loop
**try more cases by your self
*/
function evenIndexOddLength(arr){
var arr1=[];
	for (i=0;i<arr.length;i++){
		if(arr[i].length %2 !=0){
			arr1.push(arr[i]);
		}

	}return arr1;
}console.log(evenIndexOddLength( ["alsex","mercer","madrasa","rashed2","emad","halga"]));

function evenIndexOddLength(arr){
	var arr1=[];
	i=0;
	while(i<arr.length){
		if(arr[i].length %2 !=0){
			arr1.push(arr[i]);
		}
		i++
	}return arr1;
}console.log(evenIndexOddLength( ["alsex","mercer","madrasa","rashed2","emad","halga"]));

/*
21
Create a function called powerElementIndex
that accept an array of number
and return a new array that have the elemnt power by the index of it self

var nums= [44, 5, 4, 3, 2, 10]
Ex: powerElementIndex(nums) => [0, 5, 16, 27, 16, 100000]

** solve it one time using for loop and another using while loop
**try more cases by your self
*/
function powerElementIndex(arr){
	var arr1=[];
	for(i=0;i<arr.length;i++){
		arr1.push(arr[i]**i);
	}return arr1;
}
console.log(powerElementIndex([44, 5, 4, 3, 2, 10]));


function powerElementIndex(arr){
	var arr1=[];
	i=0;
	while(i<arr.length){
		arr1.push(arr[i]**i);
		i++;
	}return arr1;
}console.log(powerElementIndex([44, 5, 4, 3, 2, 10]));


/*
22
Create a function called evenNumberEvenIndex
that accept an array of nums
and return a new array that have the even number in even index

var nums= [5,2,2,1,8,66,55,77,34,9,55,1]
Ex: evenNumberEvenIndex(nums) => [2,8,34]

** solve it one time using for loop and another using while loop
**try more cases by your self
*/
function evenNumberEvenIndex (arr){
	var arr1=[];
	for (i=0;i<arr.length;i++){
		if(arr[i]%2 == 0){
		arr1.push(arr[i]);
		}

	}return arr1;
}
console.log(evenNumberEvenIndex([5,2,2,1,8,66,55,77,34,9,55,1]));


function evenNumberEvenIndex (arr){
	var arr1=[];
	i=0;
	while(i<arr.length){
		if(arr[i] % 2 == 0){
		arr1.push(arr[i]);
		}i++;
	}return arr1;
}console.log(evenNumberEvenIndex([5,2,2,1,8,66,55,77,34,9,55,1]));

