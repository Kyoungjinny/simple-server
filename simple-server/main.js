function largestPrimeFactor(n){
  var maxPrime = -1;

  while(n % 2 == 0){
    maxPrime = 2;
    n /= 2;
  }

  for(var i = 3; i <= Math.sqrt(n); i += 2){
    while(n % i == 0){
      maxPrime = i;
      n /= i;
    }
  }

  if(n > 2) maxPrime = n;

  return maxPrime;
}

const express = require('express');

const app = express();

app.get('/', (req, res) => {
  var input = req.query.input
  var result = largestPrimeFactor(input);
  res.send(result.toString());
});

app.listen(3000, () => {
  console.log("server responding");
});
