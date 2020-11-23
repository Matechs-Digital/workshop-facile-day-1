/**
 * Number
 */
export const myNumber: number = 0.5;
export const myNumberInt: number = 1;

export const division = myNumber / myNumberInt;
export const mult = myNumber * myNumberInt;
export const minus = myNumber - myNumberInt;
export const sum = myNumber + myNumberInt;

/**
 * String
 */
export const a = "a";
export const b = "b";

export const c = `${a} - ${b}`;

function addArrow2(x: number, y: number): number {
  return addArrow(x, y);
}

addArrow2(2, 4);

function addArrow(x: number, y: number): number {
  return x + y;
}

export const addArrowTypeOnRight = (x: number, y: number): number => x + y;
