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
		let arr = Array.from({ length: freq }, (v, i) => val);
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
		let i = 0;
		while (i <= set1.size) {

		}
	}
}


function backspaceCompare(S = '', T = '') {

	let s_index = S.length - 1;
	let t_index = T.length - 1;
	let stack = [];

	while (s_index >= 0 && t_index >= 0) {
		if (S[s_index] != T[t_index]) return false;
		if (S[s_index] === "#") {
			s_index -= 2;
		}


		s_index--;
		t_index--;
	}

}

function isValid(s = '') {
	let stack = [];
	let map = new Map();
	map.set("(", ")");
	map.set("[", "]");
	map.set("{", "}");
	let i = 0;
	while (i < s.length) {
		if (map.has(s[i])) {
			stack.unshift(s[i]);
		} else if (map.get(stack[0]) !== s[i]) {
			return false;
		} else stack.shift();
		i++;
	}
	return stack.length == 0;
}


function isOneBitCharacter(bits = []) {
	let isOneBitCharacter = false;
	for (let i = 0; i < bits.length; i++) {
		if (bits[i] == 1 && (bits[i + 1] == 0 || bits[i + 1] == 1)) {
			isOneBitCharacter = false;
			i++;
			continue;
		} else isOneBitCharacter = true
	}
	return isOneBitCharacter;
}

function addDigits(num) {

	function add(num) {
		if (num < 10) {
			return num;
		} else return num % 10 + add(Math.floor(num / 10));
	}

	let result = add(num);
	if (result < 10) return result;

}

function validMountainArray(A = []) {
	let i = -0;
	while (i < A.length - 1 && A[i] < A[i + 1]) i++;
	if (i === 0 || i === A.length - 1) return false;
	while (i < A.length - 1 && A[i] > A[i + 1])
		i++;
	return i == A.length - 1;
}

function transpose(A = []) {
	let R = A.length;
	let C = A[0].length;
	let B = [];
	for (let i = 0; i < C; i++) {
		B[i] = [];
		for (let j = 0; j < R; j++) {
			B[i][j] = A[j][i]
		}
	}
	return B
}

function isToeplitzMatrix(matrix = []) {
	/**
	 * Two coordinates are on the same diagonal if r1-c1==r2-c2
	 * @type {Map<number, number>}
	 */
	for (let i = 1; i < matrix.length; i++) {
		for (let j = 1; j < matrix[0].length; j++) {
			if (matrix[i - 1][j - 1] !== matrix[i][j]) return false
		}

	}
	return true;
}

function isSymmetric(root) {
	function isMirror(t1, t2) {
		if (t1 == null && t2 == null) return true;
		if (t1 == null || t2 == null) return false;
		return (t1.val === t2.val)
			&& isMirror(t1.left, t2.left)
			&& isMirror(t1.right, t2.right);

	}

	return isMirror(root, root);
}

function thirdMax(nums = []) {

	let first_max = -Infinity;
	let second_max = -Infinity;
	let third_max = -Infinity;
	for (const num of nums) {
		if (num > first_max) {
			third_max = second_max;
			second_max = first_max;
			first_max = num;
		} else if (num > second_max) {
			if (num < first_max) {
				third_max = second_max;
				second_max = num;
			}
		} else if (num > third_max) {
			if (num < second_max) {
				third_max = num;
			}
		}
	}
	//console.log(first_max, second_max, third_max)
	if (third_max == -Infinity) return first_max;
	else return third_max;
}

function maxSubArray(nums = []) {
	let actual_sum = 0, b;
	for (const item of nums) {
		b = item + b;
		if (b > actual_sum) {
			actual_sum = b;
		}
	}
	return actual_sum;
}
/**
 * 
 * @param {number[]} prices 
 * @returns {number} maximum profit
 */

function maxProfit(prices) {

	let maxProfit = 0;
	let minValue = Infinity;

	for (const price of prices) {
		if (price < minValue) {
			minValue = price;
		} else if (price - minValue > maxProfit) {
			maxProfit = price - minValue;
		}

	}
	return maxProfit;
}

