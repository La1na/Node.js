import { capitalize, reverseString } from './stringUtils';
import { Finance } from './finance';
import { UserManagement } from './userManagement';
import { generateFibonacci, generatePrimeNumbers } from './sequenceUtils';


console.log(capitalize("hello world")); 
console.log(reverseString("TypeScript")); 


const loan = new Finance.LoanCalculator(100000, 5, 12);
console.log("Monthly payment:", loan.calculateMonthlyPayment());

const tax = new Finance.TaxCalculator(50000, 13);
console.log("Income tax:", tax.calculateTax());


const admin = new UserManagement.Admin.AdminUser("Alice", "alice@example.com");
admin.displayInfo();
admin.setSuperAdminStatus(true);
admin.displayInfo();


console.log("Fibonacci up to 100:", generateFibonacci(100));
console.log("Primes up to 30:", generatePrimeNumbers(30));
