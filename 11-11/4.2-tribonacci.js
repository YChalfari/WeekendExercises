const fibToN =  [];
const fibGenerator = (arr,n) =>  {
  if(n==0){
    return [];
  }
fibToN.push(arr);
for(i=3; i<n ;i++){
  arr[i] = arr[i-1]+ arr[i-2]+ arr[i-3]
}
return arr
}
console.log(fibGenerator([0,0,1],9));