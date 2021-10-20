const drop = require('../src/drop');

drop('saxeli', ()=>{
    expect([1, 2, 3]).toStrictEqual([2, 3]);
})