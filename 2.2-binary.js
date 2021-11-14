const binaryArr  = [10,15,32,0,1,0,1];
function binaryToInt (arr){
  arr=arr.slice(-4);
  let len = arr.length;
  let pow  =  [];
  let decimal = []; 
  for  (i=0;i<len;i++){
    pow.unshift(i);    
  }
  arr.forEach((element,index) => {
    decimal.push(element*2**pow[index]);    
  });
  let toDecimal = decimal.reduce((acc, cur)=>acc+cur,0);
  return toDecimal;
}
console.log(binaryToInt(binaryArr));