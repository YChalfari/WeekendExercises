let nameStr = 'john smith';
let strFilter = /^[a-zA-Z ]+$/;
function getInitials (str){
  let split;
  let initials;
  if (strFilter.test(str)) {
    split = str.split(' ');
    initials = split[0][0].toUpperCase() +  '.' +split[1][0].toUpperCase();
  }else{
    console.log('invalid name');
  }
  return initials
}
console.log(getInitials(nameStr));