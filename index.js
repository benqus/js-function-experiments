////////////////
// Example #1 //
////////////////
console.log('');
console.log('Example', 1);

function a() {
  console.log('a', this);
}
a();

const o1 = {
  'a': a
};
// or shorter: const o1 = { a };
o1.a();

// alternatively
a.call(o1);



////////////////
// Example #2 //
////////////////
console.log('');
console.log('Example', 2);

const o2 = {
  b() {
    console.log('b', this);
  }
};
o2.b();

const b = o2.b; // or with deconstruct: const { b } = o2;
b();



// Arrow functions //



////////////////
// Example #3 //
////////////////
console.log('');
console.log('Example', 3);

const o3 = {
  c() {
    const _c = () => console.log('c', this);
    _c();
  }
}

const { c } = o3;
o3.c();
c();



////////////////
// Example #4 //
////////////////
console.log('');
console.log('Example', 4);

const o4 = {
  d: () => {
    console.log('d', this);
  }
};
o4.d();

const { d } = o4;
d();



////////////////
// Example #5 //
////////////////
console.log('');
console.log('Example', 5);

class Ipsum {
  
  e() {
    console.log('e', this);
  };

  f = () => {
    console.log('f', this);
  };

  g = (context) => {
    console.log('g', this === context);
  };

}

const o5 = new Ipsum();
const { e, f, g } = o5;
o5.e();
e();

o5.f();
f();

o5.g(o5);
g(o5);
