const nextPerfectSquare  =(n) => {
  let root = Math.sqrt(n);
  let next;
  !(Math.sqrt(n) % 1) ? next=root*2+1+n  : next = -1;
  return next;
}
  console.log(nextPerfectSquare(2.213))


