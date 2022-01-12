const OperatorDataBase = [
  "+",
  "-",
  "*",
  "/",
  "%",
];

export function getRandomNum() {
  return ~~(Math.random() * 50);
}

export function getRandomOperator() {
  return OperatorDataBase[~~(Math.random() * OperatorDataBase.length)];
}