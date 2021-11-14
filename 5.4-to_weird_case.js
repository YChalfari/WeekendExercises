let weirdCase=function(str) {
  let strArr=[...str];
for (let i = 0; i < strArr.length; i++) {
  if(i % 2 === 0){strArr[i]=strArr[i].toUpperCase() 
  }else{ 
    strArr[i]=strArr[i].toLowerCase();}  
}
return strArr.join('')
}
console.log(weirdCase( "Weird string case" ));
