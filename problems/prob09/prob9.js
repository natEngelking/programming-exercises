var generateRandom = function (num){
	for (var i = 0; i <= num; i++) {
		randNums.push(Math.floor((Math.random() * 100)));
	}
	return randNums.sort();
};

var randNums = [];
console.log(generateRandom(10));

randNums = [];
console.log(generateRandom(20));

randNums = [];
console.log(generateRandom(5));
