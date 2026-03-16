const deepEqual = (a:any, b:any):boolean => {
if (JSON.stringify(a) === JSON.stringify(b)) return true;


    return false;
};

console.log(deepEqual({a:1}, {a:1}));
console.log(deepEqual({a:1,b: {c:2}}, {a:1,b: {c:2}}));
console.log(deepEqual({a:1,b: {c:2,d:3}}, {a:1,b: {c:2}}));

const deepEqual2  = (a:any, b:any):boolean => {
  if (a === b) return true;
  if (typeof a !== "object" || typeof b !== "object" || a === null || b === null) return false;

  const keysA = Object.keys(a);
  const keysB = Object.keys(b);

  if (keysA.length !== keysB.length) return false;

  console.log("keysA.length ",keysA.length )
  for (let key of keysA) {
    if (!keysB.includes(key) || !deepEqual2(a[key], b[key])) return false;
  }

  return true;
};

console.log("equal1", deepEqual({b:{c:2,d:3}}, {b:{d:3,c:2}}));
console.log("equal12",deepEqual2({b:{c:2,d:3}}, {b:{d:3,c:2}}));

const testSym = Symbol("test");
const testObj = { [Symbol("test1")]: 'test1', [Symbol("test2")]: 'test2' };
console.log("testObj",testObj[Object.getOwnPropertySymbols(testObj)[0]]);
console.log("testObj",testObj [Symbol("test1")]);

let obj1: { a: number; b: { c: number } } | null = { a: 1, b: { c: 2 } };
const obj2: { a: number; b: typeof obj1 | null } = {
    a: 1,
    b: obj1
}

obj1 = null;

console.log("obj2", obj2)

const deepEqual3 = (a:any, b:any) : boolean => {
   let i = null;
    if (a === b) return true;

    const typeOfI = typeof i;
   console.log("typeof",typeOfI );
   return (typeOfI === "object");
    
}
console.log("deepEqual3", deepEqual3(obj1, obj2))
