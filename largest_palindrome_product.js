/*  function(digits)
 *
 *  @param {Number} digits         the amount of digits in each multiplicand
 *
 *  @return {Object} an object containing the two factors used to produce
 *                   the palindromeNumber and the palindromeNumber itself.
 */
module.exports = function(digits){
  var factor_0 = 0;
  var factor_1 = 0;
  var palindromeNumber = 0;
  var maxDigit = Math.pow(10, digits);

  function reverse_a_number(n){
    n = String(n);
    return n.split("").reverse().join("");
  }

  for (var i = maxDigit/10; i < maxDigit; i++){
    for (var j = maxDigit/10; j < maxDigit; j++){
      if (i * j === Number(reverse_a_number(i * j))){
        if (palindromeNumber <= i * j){
          factor_0 = i;
          factor_1 = j;
          palindromeNumber = factor_0 * factor_1;
        }
      }
    }
  }

  return {
    factor_0 : factor_0,
    factor_1 : factor_1,
    palindromeNumber : palindromeNumber
  };

};