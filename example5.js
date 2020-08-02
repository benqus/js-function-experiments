// prototypical inheritance
const personBase = {

  firstName: '',
  
  lastName: '',

  getFullName() {
    const { firstName, lastName } = this; // deconstruct context
    return `${firstName} ${lastName}`;
  }
};

const doeFamily = Object.create(personBase);
doeFamily.lastName = 'Doe';

const johnDoe = Object.create(doeFamily);
johnDoe.firstName = 'John';

const janeDoe = Object.create(doeFamily);
janeDoe.firstName = 'Jane';

console.log(5, johnDoe.getFullName());
console.log(5, janeDoe.getFullName());

console.log(5, personBase.getFullName.call({ firstName: 'Hakuna', lastName: 'Matata' }));
