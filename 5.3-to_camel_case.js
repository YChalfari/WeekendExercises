//QA Testing would  destroy  this  but I  don't  have time
const toCamelCase = (str) => {
  if(/^[A-Z]*$/.test(str[0])){
    return  (" " + str).toLowerCase().replace(/[^a-zA-Z0-9]+(.)/g, function(match, chr)
  {      return chr.toUpperCase();});
  } else {
    return str.toLowerCase().replace(/[^a-zA-Z0-9]+(.)/g, function(match, chr){    
        return chr.toUpperCase();
    });
  }
}
console.log(toCamelCase('The _man-in_mirror'));