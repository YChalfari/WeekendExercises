const filledArr = [0,1,1];
const fibGenerator = (arr,n) =>  {
  if(n==0){
    return [];
  }
filledArr.push(arr);
for(i=3; i<n ;i++){
  arr[i] = arr[i-1]+ arr[i-2];
}
return arr
}
console.log(fibGenerator([0,1,1],9));