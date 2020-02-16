function productExceptSelf(nums = []) {
	let leftProduct = [];
	let rightProduct = [];
	newArr = [];
	leftProduct[0] = 1;
	rightProduct[nums.length - 1] = 1;
	for (let i = 1; i < nums.length; i++) {
		leftProduct[i] = nums[i-1] * leftProduct[i - 1];
	}
	for (let i = nums.length - 2; i >= 0; i--) {
		rightProduct[i] = nums[i +1] * rightProduct[i + 1];
	}
	for (let i = 0; i < nums.length; i++) {
		newArr[i] = leftProduct[i] * rightProduct[i];
	}
	return newArr;
}
