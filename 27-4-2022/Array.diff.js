function arrayDiff(a, b) {
  for (var i=0; i<a.length; i++)
    {
      for (var j=0; j<b.length; j++)
        if (a[i]==b[j]) {
          a.splice(i, 1);
          i--;
          break;
        }
    }
  return a;
}
