const  nb_year = function(pop,percent,aug,target){
  let popCounter = pop;
  let growthPerc = percent/100;
  let years  = 0;
  for(i=0;popCounter< target;i++){
  popCounter=  popCounter+  (popCounter*growthPerc) + aug;
  years++;
  }
  return  years;
}
console.log(nb_year(1500000, 2.5, 10000, 2000000))