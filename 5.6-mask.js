const input = '567812348989';
function maskSlice (str){
  let input = str.toString();
  return input.slice(0,-4).replace(/./g, '#') + input.slice(-4);
}

function maskRegex (str){
  let input = str.toString();
  return input.replace(/.(?=.{4,}$)/g, '#');
}
console.log('Slice: ',maskSlice(input));
console.log('Regex: ',maskRegex(input));