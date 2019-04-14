const firstName = 'Sidney';
const lastName = 'Mac';
const age = 37;
const drivingAge = 16;

if (age >= drivingAge) {
  console.log(`${firstName} ${lastName} can drive.`);
  const years = age - drivingAge;
  console.log(`They have been driving for ${years} years now.`);
} else {
  for (let i = 5; i >=0; i--) {
    console.log(i);
  }
}
