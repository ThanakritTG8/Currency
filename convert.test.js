const convert = require('./convert.js');

test("฿1 = $0.033", () => {
    expect(convert(1)).toEqual('$0.03');
});

test("฿3 = $0.099", () => {
    expect(convert(3)).toEqual('$0.10');
});

test("฿5 = $0.166", () => {
    expect(convert(5)).toEqual('$0.17');
});

test("฿7 = $0.232", () => {
    expect(convert(7)).toEqual('$0.23');
});

test("฿10 = $0.332", () => {
    expect(convert(10)).toEqual('$0.33');
});

test("฿100 = $3.316", () => {
    expect(convert(100)).toEqual('$3.30');
});

test("฿-100 = $-3.316", () => {
    expect(convert(-100)).toEqual('$-3.30');
});