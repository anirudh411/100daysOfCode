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
		let arr=Array.from({length: freq}, (v, i) => val);
		newArr=[...newArr,...arr];
	}
	return newArr
}
