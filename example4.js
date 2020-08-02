
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
