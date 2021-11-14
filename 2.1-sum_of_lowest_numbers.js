const numbersArr  = [19, 5, 42, 2, 77];

//1 liner with parseInt
let sum = numbersArr.sort((a,b)=>parseInt(a) -parseInt(b)).slice(0,2)[0]+numbersArr.sort((a,b)=>parseInt(a) -parseInt(b)).slice(0,2)[1];
console.log(sum); 

//Without parseInt because :)
function findSmallestTwo(arr){
  let i, first, second;
  if(arr.length < 2){
    return 'Invalid input: Not enough numbers in the array!';
  }
  first=Number.MAX_VALUE;
  second=Number.MAX_VALUE;
  for(i=0;i<arr.length;i++){
    if(arr[i] < first){ 
    second =  first;
    first = arr[i] ;}
    else if(arr[i]  < second &&  arr[i] != first){
    second =  arr[i];
    }
  }
  if (second ==  Number.MAX_VALUE) { second = 'No 2nd smallest' };
return first + second;   
}
console.log(findSmallestTwo(numbersArr));

