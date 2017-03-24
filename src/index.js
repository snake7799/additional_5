module.exports = function check(str, bracketsConfig) {
	if (str.length % 2 !== 0)
		return false;
	
	let bracketsArr = str.split('');
	let stack = [];
	
	for (let i = 0; i < bracketsArr.length; i++) {
		for (let j = 0; j < bracketsConfig.length; j++) {
			if ((stack[stack.length - 1] == bracketsConfig[j][0]) && (bracketsArr[i] == bracketsConfig[j][1]))
				stack.pop();
			else if (bracketsArr[i] == bracketsConfig[j][0])
				stack.push(bracketsArr[i]);
		}

	}
	
	return stack.length === 0;
};
