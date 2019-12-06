function add(strngg) {

	var search = /-?[0-9]+/g;
	var negativenum = [];
	var changetonumber = strngg.match(search).map(function (x){
		let arr = [];
			let i = 0;
	
			for (i < x.length; i > 0 ; i++)
				console.log(x + " negatives not allowed");
	
				if ( x < 0 ){
					throw (arr.push(x) + " negatives not allowed");
				};
	
			if (x > 1000){
				x = 0;
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
	
	console.info(add("-4, 34, 30000"))