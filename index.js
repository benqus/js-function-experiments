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
