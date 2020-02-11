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


function removeVowels(str ='') {
	if (str.length<1) return "";
	if (["a","e","i","o","u"].includes(str[0].toLowerCase())) return  removeVowels(str.substr(1));
	else return  str[0]+removeVowels(str.substr(1));
}
console.log(removeVowels("anirudh"));
