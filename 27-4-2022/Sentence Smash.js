function smash (words) {
  if (words.length==1) return words[0]
  var ans = "";
  for (var i=0; i<words.length; i++) {
    ans+=words[i];
    if (i!=words.length-1) ans+=" ";
  }
   return ans;
};
