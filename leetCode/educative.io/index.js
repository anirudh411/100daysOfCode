function findMinimum(arr) {
	let minimum = Number.MAX_VALUE;
	for (let num of arr){
		if (num<minimum) minimum=num;
	}
return minimum;
}
