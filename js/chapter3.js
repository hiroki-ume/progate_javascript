const greet = (name) => {
  console.log("こんにちは");
  console.log(`私は${name}です`);
};

greet("忍者わんこ");

console.log("---------------------");

const add = (number1, number2) => {
  console.log(number1 + number2);
};

add(3439,1938348);

console.log("---------------------");

const half = (number) => {
  return number / 2;
};

const result = half(84);

console.log(`結果は${result}です`);

console.log("---------------------");

const check = (number) => {
  return number % 3 === 0;
}

if (check(95248)) {
  console.log("三の倍数です");
} else {
  console.log("三の倍数ではありません");
};

console.log("---------------------");

const number1 = 103;
const number2 = 72;
const number3 = 189;

const getMax = (a, b, c) => {
  let max = a;

  if (b > max) {
    max = b;
  } else if (max < c) {
    max = c;
  };
  return max;
};

console.log(`最大値は${getMax(number1, number2, number3)}です`);
