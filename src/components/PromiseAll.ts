function PromiseAll<T>(promises: Promise<T>[]): Promise<T[]> {
  return Promise.all(promises);
}

const Promise1 = new Promise<number>((resolve) => {
  setTimeout(() => {
    resolve(1);
  }, 1000);
});

const Promise2 = new Promise<number>((resolve, reject) => {
  setTimeout(() => {
    reject(new Error("Promise2 rejected"));
  }, 2000);
});

const Promise3 = (param1: number, param2: number) => {
  return new Promise<number>((resolve, reject) => {
    if (param1 + param2 > 0) {
      resolve(param1 + param2);
    } else {
      reject(new Error("Sum is not positive"));
    }
  });
};


PromiseAll([Promise1, Promise2, Promise3(1, 2)])
.then((results) => {
  console.log(results); // [1, 2]
})
.catch((error) => {
  console.error("Error:", error.message);
});


const stack = [1, [2, [3, [4, [5]]]]];
const stack2 = [...stack]
//console.log("stack2:", stack2.length);

function flattenDeep(arr: any[]) {
    console.log("arr:", arr.length)

  const stack = [...arr];
  console.log("expanded:", stack.length)
  const result = [];

  while (stack.length) {
    const item = stack.pop();
    console.log("item:", item);
    if (Array.isArray(item)) {
      stack.push(...item);  // push back expanded items
          console.log("stack:", stack);
    } else {
      result.unshift(item); // maintain original order
    }
  }

  console.log("stack.length!",stack.length)

  return result;
}

console.log("AAA",flattenDeep(stack))