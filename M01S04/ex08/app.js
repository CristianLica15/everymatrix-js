let i = 1;
var a =prompt('Lim');

var b = prompt('Div');
while(i <= a)
{
   if (i % b !== 0) {
       i++
       continue;
   }
   console.log(i)
   i++
}

