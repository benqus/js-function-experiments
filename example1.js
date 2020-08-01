
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
