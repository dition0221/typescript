type Add = {
  (a: number, b: number): number;
  (a: number, b: number, c: number): number;
};

const add: Add = (a, b, c?: number) => {
  return a + b;
};
add(1, 2);
add(1, 2, 3);
