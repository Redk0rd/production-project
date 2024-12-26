// class Config {
//     constructor() {
//         if (Config.data) {
//             return  Config.data
//         }
//         Config.data = this;

//     }
// }

// const config1 = new Config();
// config1.data = 0

// console.log(config1.data);

// const config2 = new Config();

// console.log(config1 === config2);
// console.log('config2.instance ', config2.data);
// config1.data = config2
// console.log('config1.instance ', config1.data);
// console.log(config2.data);

// const arrArg = [1, 2, [3], [4, [5, [6]], 7], 8, 9];

// function flatter (arr) {

// 	// let res = [];
//     // arr.forEach(element => {
//     //     res = Array.isArray(element)
//     //         ? res.concat(flatter(element))
//     //         : res.concat(element);
//     // });
//     // return res;

// 	// return arr.reduce((res, element) => {
//     //     return Array.isArray(element)
//     //         ? res.concat(flatter(element))
//     //         : res.concat(element);
//     // }, []);

// 	// const stack = [...arr]; // Копируем исходный массив в стек
//     // const result = [];

//     // while (stack.length > 0) {
//     //     const element = stack.pop(); // Забираем последний элемент из стека
//     //     if (Array.isArray(element)) {
//     //         // Если элемент массив, разворачиваем его и добавляем в стек
//     //         stack.push(...element);
//     //     } else {
//     //         // Если элемент не массив, добавляем его в результат
//     //         result.push(element);
//     //     }
//     // }

//     // return result.reverse(); // Так как элементы добавлялись в обратном порядке, нужно их развернуть

// 	// return arr.flat(2)
// }

// console.log(flatter(arrArg));

// const square = x => x * x;
// const times2 = x => x * 2;
// const sum = (a, b) => a + b;

// function compose(...funcs) {
// 	return (...args) => {
// 		return funcs.reduceRight((acc, fn) => {
// 			return [fn(...acc)];
// 		}, args)[0];
// 	};
// }

// console.log(compose(square, times2)(2))

// const arrar = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16]

// function binarySearch(arr, search) {
// 	let left = 0,
// 		right = arr.length - 1,
// 	while (left < right) {
// 		const mid = Math.floor((left + right) / 2)
// 		if(arr[mid] >= search){
// 			right = mid
// 		} else {
// 			left = mid + 1
// 		}
// 	}
// 	return arr[right] === search ? right : null
// }

// console.log(binarySearch(arrar, 3));

// рекурсивный поиск

// function recursiveBinarySearch(array, search, start, end) {
// 	let middle = Math.floor((start + end) / 2);
// 	if (search === array[middle]) {
// 		return middle;
// 	}
// 	if (search < array[middle]) {
// 		return recursiveBinarySearch(array, search, start, middle - 1);
// 	}
// 	if(search > array[search]) {
// 		return recursiveBinarySearch(array, search, middle + 1, end)
// 	}
// }

// const res = recursiveBinarySearch(arrar, 9, 0, arrar.length)

// console.log(res);

// линейная сортировка

// const arrayNotSort = [2, 4, 11, 6, 1, 3, 5, 7, 10, 9, 8];

// function selectionSort(arr) {
// 	for (let i = 0; i < arr.length; i++) {
// 		let indexMin = i;
// 		for (let j = i + 1; j < arr.length; j++) {
// 			if (arr[j] < arr[indexMin]) {
// 				indexMin = j;
// 			}
// 		}
// 		let tmp = arr[i];
// 		arr[i] = arr[indexMin];
// 		arr[indexMin] = tmp;
// 	}
// 	return arr;
// }

// let res = selectionSort(arrayNotSort);

// console.log(res);

// быстра сортировка

// const arrayNotSort = [2, 4, 11, 6, 1, 3, 5, 7, 10, 9, 8];

// function quickSort(array) {
// 	if(array.length <= 1 ){
// 		return array
// 	}

// 	let pivotIndex = Math.floor(array.length / 2)
// 	let pivot = array[pivotIndex]
// 	let less = []
// 	let greater = []
// 	for(let i = 0; i < array.length; i ++){
// 		if(i === pivotIndex){
// 			continue
// 		}
// 		if(array[i] < pivot){
// 			less.push(array[i])
// 		}
// 		if(array[i] > pivot){
// 			greater.push(array[i])
// 		}
// 	}
// 	return [...quickSort(less),pivot,...quickSort(greater)]
// }

// const res = quickSort(arrayNotSort)

// console.log(res);

// const arrayNotSort = [2, 4, 11, 6, 1, 3, 5, 7, 10, 9, 8];

// function findMax(array){
// 	ans = array[0]
// 	// array.forEach(el => {
// 	// 	if(el > ans){
// 	// 		ans = el
// 	// 	}
// 	// });
// 	for (let index = 1; index < array.length; index++) {
// 		const element = array[index];
// 			if(element > ans){
// 			ans = element
// 		}
// 	}
// 	return ans
// }

// console.log(findMax(arrayNotSort));

// function find2Max(seq) {
// 	let max1 = Math.max(seq[0], seq[1])
// 	let max2 = Math.min(seq[0], seq[1])
// 	for(let i = 2;i <seq.length;i++){
// 		if (seq[i] >max1){
// 			max2 = max1
// 			max1 = seq[i]
// 		} else if(seq[i] > max2){
// 			max2 = seq[i]
// 		}
// 	}
// 	return [max1, max2]
// }

// const res = find2Max([1,2,10,9,3,4,5,6,7,8])

// console.log(res);

function findMinEven(seq) {
	ans = -1;
	for (let i of seq) {
		if (i % 2 === 0 && (ans === -1 || i < ans)) {
			ans = i;
		}
	}
	return ans;
}


const res = findMinEven([1,10,9,3,5,6,7,8,4,2])

console.log(res);