

function reversStr(str){
	let res = ''
	for (let index = str.length;index >= 0;index--) {
		res += str.substring(1,index)
		console.log(`${index} --->   `, res);
	}

	return res
}

const sas = reversStr('jopa')
console.log(sas);


