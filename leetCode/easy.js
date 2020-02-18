/**
 *  Number of Steps to Reduce a Number to Zero
 * @param {number} num
 * @returns {number}
 */
function numberOfSteps(num = 0) {
	if (num < 2) return num;
	else if (num % 2 == 0) return 1 + numberOfSteps(num / 2);
	else return 1 + numberOfSteps(num - 1);
}


function removeVowels(str = '') {
	if (str.length < 1) return "";
	if (["a", "e", "i", "o", "u"].includes(str[0].toLowerCase())) return removeVowels(str.substr(1));
	else return str[0] + removeVowels(str.substr(1));
}

/**
 * Defanging an IP Address
 * Given a valid (IPv4) IP address, return a defanged version of that IP address.
 * A defanged IP address replaces every period "." with "[.]".
 * @param {string} address
 * @returns {string}
 */
function defangIPaddr(address = '') {
	if (!address.length) return "";
	if (address[0] === '.') return `[${address[0]}]${defangIPaddr(address.substr(1))}`;
	else return `${address[0]}${defangIPaddr(address.substr(1))}`;
}

function decompressRLElist(nums) {
	let newArr = [];
	for (let i = 0; i <= nums.length - 2; i += 2) {
		let freq = nums[i];
		let val = nums[i + 1];
		let arr = Array.from({length: freq}, (v, i) => val);
		newArr = [...newArr, ...arr];
	}
	return newArr
}

function subtractProductAndSum(n) {

	function product(number) {
		if (number < 2) return 1;
		else return (number % 10) * product(Math.floor(number / 10));
	}

	function sum(number) {
		if (number < 2) return number;
		else return (number % 10) + sum(Math.floor(number / 10));
	}

	return product(n) - sum(n);
}

function findNumbers(nums) {
	let count = 0;
	nums.forEach(num => {
		if (num.toString().length % 2 === 0) count++
	});
	return count;
}

function numJewelsInStones(J, S) {
	return [...S].reduce((a, c) => {
		if (J.includes(c)) ++a;
		return a;
	}, 0);
}

function twoSum(numbers = [], target) {
	let i = 0;
	let j = numbers.length - 1;
	while (j > i) {
		if (numbers[i] + numbers[j] === target) return [i, j];
		else if (numbers[i] + numbers[j] >= target) j--;
		else i++;
	}
}

function arrarrayPairSum(nums = []) {
	nums = nums.sort((a, b) => a - b);
	let sum = 0;
	for (let i = 0; i < nums.length; i += 2) {
		sum += nums[i];
	}
	return sum
}

function repeatedNTimes(A = []) {
	let occurances = new Set();
	for (let i = 0; i < A.length; i++) {
		if (occurances.has(A[i])) return A[i];
		else occurances.add(A[i]);
	}
}

function intersection(nums1 = [], nums2 = []) {
	let set1 = new Set(nums1);
	let set2 = new Set(nums2);
	let output = [];
	if (set1.size > set2.size) {
		let i=0;
		while (i<=set1.size){

		}
	}
}



