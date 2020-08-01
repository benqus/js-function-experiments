
const o2 = {
  b() {
    console.log('b', this);
  }
};
o2.b();

const b = o2.b;
b();