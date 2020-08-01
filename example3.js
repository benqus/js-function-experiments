
const o3 = {
  c() {
    const _c = () => console.log('c', this);
    _c();
  }
}

const { c } = o3;
o3.c();
c();
