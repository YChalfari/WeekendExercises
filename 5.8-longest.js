function longFind(str){
  let wordArr=str.split(' ');
  return wordArr.sort((a,b)=>a.length - b.length).pop()
}
console.log(longFind('this is surely quite a fun exercise'))