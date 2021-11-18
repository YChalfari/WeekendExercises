function shortFind(str){
  let wordArr=str.split(' ');
  return wordArr.sort((a,b)=>a.length -b.length ).shift()
}
console.log(shortFind('this is surely quite a fun exercise'))