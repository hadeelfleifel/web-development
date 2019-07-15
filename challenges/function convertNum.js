function convertNum(num){
	if (num==0){
	return "zero";
	}

	if(num ==10){
	return 'ten';
}
	var first=[ 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];

	var teen=['eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];

	var sec=['twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];

	var third=['handred','thousand', 'million'];


var strNumber = ""+num;
if (num <10){
	
	return first[strNumber[0]-1];
}

if (num>10 && num <20){
	
	return teen[strNumber[1]-1];}

if(num>=20 && num <100 ){
	
	return sec[strNumber[0]-2]+" " +first[strNumber[1]-1];
}

if (num >=100){
	
	return third[strNumber[0]-1]+sec[strNumber[1]-2]+first[strNumber[2]-1];
}
}