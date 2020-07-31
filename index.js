////////////////
// Example #1 //
////////////////
console.log('Example', 1);

function a() {
  console.log(this);
}
a();

const o1 = {
  'a': a
};
// or shorter: const o1 = { a };
o1.a();



////////////////
// Example #2 //
////////////////
console.log('Example', 2);

const o2 = {
  b() {
    console.log(this);
  }
};
o2.b();

const b = o2.b; // or with deconstruct: const { b } = o2;
b();



// Arrow functions //



////////////////
// Example #3 //
////////////////
console.log('Example', 3);

const o3 = {
  d() {
    const _d = () => console.log(this);
    _d();
  }
}

const { d } = o3;
o3.d();
d();



////////////////
// Example #4 //
////////////////
console.log('Example', 4);

const o4 = {
  c: () => {
    console.log(this);
  }
};
o4.c();

const { c } = o4;
c();



////////////////
// Example #5 //
////////////////
console.log('Example', 5);

class Ipsum {
  e = () => {
    console.log(this);
  }
}
const o5 = new Ipsum();
const { e } = o5;
o5.e();
e();
