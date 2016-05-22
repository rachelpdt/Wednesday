//Part One: Print out the sum of this array to the console.
var array = [ 1,2,3,4,5];
var added = array.splice(2,0,6);
var count = 0;
for(var i=0, n=array.length; i < n; i++)
  {
   count += array[i];
 }
console.log(count)
