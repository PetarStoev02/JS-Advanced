function solve(num1,num2){

    function gcd_two_numbers(x, y) {
        if ((typeof x !== 'number') || (typeof y !== 'number')) 
          return false;
        x = Math.abs(x);
        y = Math.abs(y);
        while(y) {
          var t = y;
          y = x % y;
          x = t;
        }
        return x;
      }

    console. log(gcd_two_numbers(num1, num2));

}
solve(15, 5)