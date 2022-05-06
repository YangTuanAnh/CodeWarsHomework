function coinsNeeded(amount, coinDenominations) {
  var ans=0;
  coinDenominations.sort((a, b) => {return Number(b)-Number(a)}).map (coin => {
    ans+=Math.floor(amount/coin);
    amount%=coin;
  });
  return ans;
}
