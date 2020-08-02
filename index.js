// Example 1
// declare function
function a() {
  console.log('a', this);
}

// invoke function
a();

// assign as object property
const o1 = {
  'a': a
};

// invoke function via the object
o1.a();

// alternatively
a.call(o1);



// Example 2
const o2 = {
  b() {
    console.log('b', this);
  }
};
o2.b();

const b = o2.b;
b();



// Example 3
const o3 = {
  c() {
    const _c = () => console.log('c', this);
    _c();
  }
}

const { c } = o3;
o3.c();
c();



// Example 4
class Ipsum {
  
  d() {
    console.log('d', this);
  }

  e = () => {
    console.log('e', this);
  }

}

const o4 = new Ipsum();
const { d, e } = o4;
o4.d();
d();

o4.e();
e();

e.call(window);




// Example 5
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
