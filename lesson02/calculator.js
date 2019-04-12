let c = 5;
c += 1;
console.log(c);

const a = 10;
const b = a + 2;

const w = 12;
const x = 8;
const y = 'it worked!';
const z = 'something went wrong...try again';

console.log((w + x) - 2);
console.log(a % x);
console.log((a * c) / 20);

if ((w + x) >= 25) {
  console.log('The sum of w and x is less than or equal to 25');
} else if ((w + x) >= 22){
  console.log('The sum of w and x is less than or equal to 22');
} else if ((w + x) >= 20) {
  console.log('The sum of w and x is less than or equal to 20');
}

if (b === w) {
  console.log(y);
} else {
  console.log(z);
}
