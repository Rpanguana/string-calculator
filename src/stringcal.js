// // global scope should define any object to be used anywhere.
// var number = number.test("1, 2, 3")
// var arguments = ("");


// function stringadd (){
// 	if (arguments == argument.string() ){
// 	for(var i =0; i < arguments.length; i++) {
// 		alert ( arguments[i] );
// 	}}
// } 
// stringadd("2","68", "6");

// 	var count = 0;

//   	var matches = strngg.match(/(-?\d+)/).map(function());
// return matches;


//     if (matches) { 
//         document.getElementById('GFG').innerHTML 
//                 = matches[0]; 
//     } 

// 	for ( var i = 0; i < str.length(); i++){
// 		return count+=;
// 	}
// }

// function add(str) {

// 	var sum = 0;
// 	var arr = str.split(/,| |\n/);

// 	for (var i in arr){
// 		sum = sum + parseInt(arr[i])
// 	}
// 	return sum
// 	// body...
// }

// console.info(add("1,2,43"));

function add(strngg) {

var search = /-?[0-9]+/g;
var negativenum = [];
var changetonumber = strngg.match(search).map(function (x){
	let arr = [];
		let i = 0;
		let sum = 0;

		for (i < x.length; i > 0 ; i++)
			return (x + " negatives not allowed");

		if ( x < 0 ){
			throw (arr.push(x) + " negatives not allowed");
		};

		if (x > 1000){
			return (0);
		}
		return parseInt(x, 10);

		});

	let i = 0;
	let sum = 0;

	while (i < changetonumber.length){

		sum = sum + changetonumber[i];
		i++;
}
	return sum;

}

console.info(add("-4, 34, 3"))

// Calling Add with a negative number will throw an exception “negatives not allowed” - and the negative that was passed. 
// if there are multiple negatives, show all of them in the exception message.


// function add()
// {


// 	var search=/(-?\d+)/;
//     var Arrayr=[];
// 	for (let i=0;i<arguments.length;i++){
//        Arrayr=arguments[i].match(search).map(Number);

// 	}

// 	return Arrayr;
// }