const {toPairs} = require('../src/toPairs');

describe('toPairs', () => {
    it('should return object with keys where values is not a number', () => {
      function Foo() {
        this.a = 1;
        this.b = 2;
      }
      Foo.prototype.c = 3;
  
      expect(toPairs(new Foo())).toEqual([
        ['a', 1],
        ['b', 2],
      ]);
    });
  });

 