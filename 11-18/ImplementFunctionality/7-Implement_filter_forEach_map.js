const testArr = [10, 5, 30, 2, "why", "do", "this"];
console.log(testArr.filter((num) => num > 5)); //10,30
testArr.forEach((el) => console.log(el)); //log each element in arr
console.log(testArr.map((item) => item + "1")); //add '1' to each el which also turns the ints to strings
