///#1
////https://www.codewars.com/kata/dollars-and-cents
//////
function dollarsCentsFormatting(num){
	var dollar = "$";
	var dot = ".";
	num = num.toString();
	if(num.indexOf(dot) !== -1){
	//точка есть
		if(zero(num) == 1){
			num += "0";
		}
	}else{
		num += dot + "00";
	}
	function zero(num){
		var splitted = num.split('.');
		var count = splitted[1].length;
		return count;
	}
	return dollar + num;
}
dollarsCentsFormatting(33.99);
dollarsCentsFormatting(3);
dollarsCentsFormatting(3.1);
///////////
///#2
//https://www.codewars.com/kata/l1-bartender-drinks
////
function Drinks(array){
	var result =[] ;
	array.forEach(function(item, i, arr) {
		result.push(getDrinkByProfession(item));
	});
	//var jsonString = JSON.stringify(result);
	function getDrinkByProfession(str, id){
		var drinkByProfession = new DrinkByProfession("Patron Tequila", "Anything with Alcohol", "Hipster Craft Beer", "Moonshine", "Your tax dollars", "Cristal");
		var occupation = str.toLowerCase();
		var  newOccupation = occupation.replace(/\s/g, '_');
		var  occupationNew = drinkByProfession[newOccupation];
		if(occupationNew === undefined){
			occupationNew = drinkByProfession["default"];
		}
		return occupationNew;
	}
	function DrinkByProfession(jabroni, school_counselor, programmer, bike_gang_member, politician, rapper) {
		this.jabroni = jabroni;
		this.school_counselor = school_counselor;
		this.programmer = programmer;
		this.bike_gang_member = bike_gang_member;
		this.politician = politician;
		this.rapper = rapper;
		this.default = "Beer";
	}
	return result;
}
Drinks(["Jabroni", "School Counselor",  "Programmer",  "Bike Gang Member",  "Politician",  "Rapper", "BAR"]);
Drinks(["JaBRONi", "SCHOOL COUNSELOR",  "Programmer",  "bike GANG member",  "pOLitiCIaN",  "rAPPEr", "Foo"]);
//////#3 Band name generator
/////https://www.codewars.com/kata/band-name-generator
function bandNameGenerator(name){
	var result;
	var firstLetter = name.charAt(0);
	var lastLetter = name.charAt(name.length-1);
	if(firstLetter == lastLetter){
		result = firstLetter.toUpperCase() + name.slice(1) + name.slice(1);
	}else{
		result = "The " + firstLetter.toUpperCase() + name.slice(1);
	}
	return result;	
}
bandNameGenerator("dolphin");
bandNameGenerator("europe");
bandNameGenerator("alaska");
//////#4
/////https://www.codewars.com/kata/average-array
/////

function avgArrayFunc(array){
	var firstArrayLength = array.length;
	var innerArrayLength = array[0].length;
	var arr = new Array();
	for(let i = 0; i < innerArrayLength; i++ ){
		arr[i] = 0;
		for(let y = 0; y < firstArrayLength; y++){
			arr[i] += array[y][i]/firstArrayLength;
		}
	}
	return arr;
}
avgArrayFunc([[1, 2, 3, 4], [5, 6, 7, 8]]);// => [3, 4, 5, 6]
avgArrayFunc([[2, 3, 9, 10, 7], [12, 6, 89, 45, 3], [9, 12, 56, 10, 34], [67, 23, 1, 88, 34]]);// => [22.5, 11, 38.75, 38.25, 19.5]
////#5
///https://www.codewars.com/kata/array-deep-count
///
function deepCount(data, count){
	if(count === undefined){
		count = 0;
	}
	countTotal = data.length + count;
	for(let i = 0; i < data.length; i++ ){
		if(typeof data[i] == 'object'){
			deepCount(data[i], countTotal);
		}
	}
	return countTotal;
}
deepCount([1, 2, 3]);  
deepCount(["x", "y", ["z"]]);
deepCount([1, 2, [3, 4, [5]]]);
 ////6
 ////https://www.codewars.com/kata/there-are-two-kinds-of-people
function functionator(str){
	var splittedStr = str.split(' ');
	var ladder = {};
		ladder[splittedStr[0]]= function() {
			var num = 1;
			return recurseFunc(splittedStr, num);
		}
	return ladder;
}
function recurseFunc(splittedStr, num){
	return{
		[splittedStr[num]]: function() {
			if(num < splittedStr.length){
				num++;
				return recurseFunc(splittedStr, num);
			}
		}
	}
}
functionator('there are two kinds of people');
