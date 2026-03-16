function solution(N) {
  if (N === 0 || N === 1) return 0;
  let copyN = N;

  let binaryStr = null;
  while (copyN !== 1) {
    const binFlag = Math.floor(copyN % 2);
    // console.log("binFlag", binFlag);
    binaryStr = String(binFlag) + binaryStr;

    copyN = Math.floor(copyN / 2);
  }

  console.log("binaryStr!", binaryStr);
  const binArr = binaryStr.split("");
  const result = binArr.reduce(
    (acc, b) => {
      console.log("b", b);
      if (!acc.counting && b === "1") acc.counting = true;

      if (acc.counting && b === "0") acc.count++;
      if (acc.counting && b === "1") {
        if (acc.count > acc.longest) {
          acc.longest = acc.count;
        }
        acc.count = 0;
      }
      console.log("acc", acc);
      return acc;
    },
    { counting: false, count: 0, longest: null },
  );

  return result.longest;
}

console.log("solution", solution(529));
