// 1
function tellFortune(jobTitle, geoLocation, partner, numKids) {
  var future = 'You will be a ' + jobTitle + ' in ' + geoLocation + ' and married to ' +
    partner + ' ' + ' with ' + numKids + ' kids.';
  console.log(future);
}
tellFortune('bball player', 'spain', 'Shaq', 3);
tellFortune('stunt double', 'Japan', 'Ryan Gosling', 3000);
tellFortune('Elvis impersonator', 'Russia', 'The Oatmeal', 0);

// 2
function calculateDogAge(age) {
  var dogYears = 7 * age;
  return "Your doggie is " + dogYears + " years old in dog years!";
}
calculateDogAge(1);
calculateDogAge(0.5);
calculateDogAge(12);

//3
function calculateSupply(age, numPerDay) {
  var maxAge = 100;
  var totalNeeded = (numPerDay * 365) * (maxAge - age);
  var message = 'You will need ' + totalNeeded + ' cups of tea to last you until the ripe old age of ' + maxAge;
  return message;
}
calculateSupply(28, 36);
calculateSupply(28, 2.5);
calculateSupply(28, 400);


//4
function greet(name) {
  return "Hello " + name + "!";
}

//5
// Pass didnt use the parameter x => cat
// Pass static parameter 7 => x
// Pass static parameter and use it  '7' => x

//6
// all of them
function double3(x) {
  return 2 * x;
}

//7
function cube(x) {
  return x * x * x;
}


//8
function multiply(x, y) {
  return x * y;
}


//9
function canIGetADrivingLicense(age) {
  if (age >= 20) {
    return "yes you can";
  }
  return "please come back after" + (20 - age) + "years to get one";
}


//10
function sameLength(string1, string2) {
  if (string1.length === string2.length) {
    return true;
  }
  return false;
}


//11
function largerNubmer(num1, num2) {
  if (num1 > num2) {
    return num1;
  }
  return num2;
}


//12
function smallerNubmer(num1, num2, num3) {
  var min = num1
  if (num2 < min) {
    min = num2;
  }
  if (num3 < min) {
    min = num3;
  }
  return min
}


//13
function shorterString(string1, string2, string3, string4, string5) {
  var shorter = string1
  if (string2.length < shorter.length) {
    shorter = string2;
  }
  if (string3.length < shorter.length) {
    shorter = string3;
  }
  if (string4.length < shorter.length) {
    shorter = string4;
  }
  if (string5.length < shorter.length) {
    shorter = string5;
  }
  return shorter
}

//14
function longerString(string1, string2, string3, string4) {
  var longer = string1
  if (string2.length > longer.length) {
    longer = string2;
  }
  if (string3.length > longer.length) {
    longer = string3;
  }
  if (string4.length > longer.length) {
    longer = string4;
  }
  return longerString
}

//15
function isEven(num) {
  if (num % 2 === 0) {
    return true;
  }
  return false;
}

//16
function isOdd(num) {
  if (num % 2 !== 0) {
    return true;
  }
  return false;
}

//17
function positive(number) {
  if (number > 0) {
    return number;
  }
  return number * -1;
}


//18
function fullName(firstName, lastName) {
  return firstName + ' ' + lastName;
}

//19
function average(num1, num2, num3, num4, num5) {
  return (num1 + num2 + num3 + num4 + num5) / 5;
}

//20
function randomNumber() {
  return Math.random();
}

//21
function randomBetweenNumbers(num1, num2) {
  return Math.floor(Math.random() * (num2 - num1)) + num1
}

//22
function socreInUniversity(score) {
  if (score >= 90 && score < 100)
    return 'A';
  if (score >= 80 && score < 90)
    return 'B';
  if (score >= 70 && score < 80)
    return 'C';
  if (score >= 60 && score < 70)
    return 'D';
  if (score >= 50 && score < 60)
    return 'E';
  if (score < 50)
    return 'F';
}

//23
var count = 0
function counter() {
  return ++count;
}

//24
function resetCounter() {
  var oldCounter = count
  count = 0;
  return oldCounter + " and the count reset now";
}











