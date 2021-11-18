let array  =  [[0,6],[10,1],[0,0]];
function peopleLeftOnBus (arr){
  let  peopleLeft  =0;
  for (let i = 0; i < array.length; i++) { 
    if(peopleLeft<0){
      return console.log('IMPOSSIBLE');
    }
    peopleLeft  += arr[i][1]  -arr[i][0]  ;}
  return peopleLeft;}
console.log(peopleLeftOnBus(array))
