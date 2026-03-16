function decimalNumberToBinaryNumber(num: number): string {


  if (num < 2) return num.toString();

    let binary = "";
    let remainder = null;

  while (num != 1) {
    remainder = num % 2;
    console.log("remainder!", remainder);
    binary = remainder + binary;
     console.log("binary!", binary);

    num = Math.floor(num / 2);
  }
//  binary = "1" + binary;
  return binary;
}

function binarySearch(arr: number[], target: number): number {
  let left = 0;
  let right = arr.length - 1;

  while (left <= right) {
    const mid = Math.floor((left + right) / 2);
    console.log("mid!", mid);
    if (arr[mid] === target) {
      return mid;
    } else if (arr[mid] < target) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }

  return -1;
}

function DepthFirstSearch(node: any, target: any): boolean {
  if (node === null) return false;
  if (node.value === target) return true;

  for (let child of node.children || []) {
    if (DepthFirstSearch(child, target)) {
      return true;
    }
  }

  return false;
}

function breadthFirstSearch(root: any, target: any): boolean {
  if (root === null) return false;

  const queue = [root];

  while (queue.length > 0) {
    const node = queue.shift();
    if (node.value === target) return true;
    for (let child of node.children || []) {
      queue.push(child);
    }
  }

  return false;
}



console.log("binarySearch", binarySearch([1, 2, 3, 4, 5, 6, 7, 8, 9, 10,11], 5));
console.log("DepthFirstSearch", DepthFirstSearch({ value: 1, children: [{ value: 2 }, { value: 3 }] }, 2));
console.log("breadthFirstSearch", breadthFirstSearch({ value: 1, children: [{ value: 2 }, { value: 3 }] }, 2));