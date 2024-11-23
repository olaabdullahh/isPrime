// دالة للتحقق من أن الرقم أولي
function isPrime(num) {
    if (num < 2) {
      return false;
    }
    for (let i = 2; i <= Math.sqrt(num); i++) {
      if (num % i === 0) {
        return false;
      }
    }
    return true;
  }
  
  // دالة لطباعة الأعداد الأولية بين n و m
  function printPrimesBetween(n, m) {
    for (let num = n + 1; num < m; num++) {
      if (isPrime(num)) {
        console.log(num);
      }
    }
  }
  
  // قراءة القيم من المستخدم
  let n = parseInt(prompt("Enter the first integer (n): "));
  let m = parseInt(prompt("Enter the second integer (m): "));
  
  // طباعة الأعداد الأولية بين n و m
  printPrimesBetween(n, m);