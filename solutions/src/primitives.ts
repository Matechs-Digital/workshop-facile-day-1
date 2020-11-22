/**
 * Boolean
 */
export const myBooleanTrue: boolean = true;
export const myBooleanFalse: boolean = false;
export const myBooleanConstFalse: false = false;

// @ts-expect-error
export const myBooleanConstFalseWrong: false = true;

/**
 * Number
 */
export const myNumber: number = 0.5;
export const myNumberInt: number = 1;

/**
 * String
 */
export const myStringHello: string = "hello";
export const myStringWorld: string = "hello";
export const myStringHelloWorls: string = myStringHello + myStringWorld;

/**
 * Function
 */
export function add(x: number, y: number): number {
  return x + y;
}

export const addArrow: (x: number, y: number) => number = (x, y) => x + y;

export const addArrowTypeOnRight = (x: number, y: number): number => x + y;

/**
 * Array
 */
export const myArrayString: string[] = ["hello"];

/**
 * Tuple
 */
export const myArrayTuple: [string, string] = ["hello", "world"];

/**
 * Enum, considered risky
 */
export enum Color {
  Red,
  Blue,
  Green,
}

export const myBlue = Color.Blue;

/**
 * Unknown
 */
export const myUnknown: unknown = {};
export const myUnknown2: unknown = 1;
export const myUnknown3: unknown = "1";

// @ts-expect-error
export const myString: string = myUnknown3;

/**
 * Any, considered harmful but necessary
 */
export const myAny: any = myUnknown;
export const myAny2: any = myUnknown2;
export const myAny3: any = myUnknown3;

// no error
export const myString2: string = myAny;

/**
 * Void
 */
export const myVoid: void = undefined;

export function myFunction(): void {
  console.log("hello");
}

export const myVoid2 = myFunction();

/**
 * Null & Undefined, twice the same concept...
 */
export const myNull: null = null;
export const myUndefined: undefined = undefined;

// @ts-expect-error
export const myUndefined2: undefined = null;
// @ts-expect-error
export const myUndefined3: null = undefined;

/**
 * Never
 */

// @ts-expect-error
export const myNever1: never = {};
// @ts-expect-error
export const myNever2: never = myFunction();
// @ts-expect-error
export const myNever3: never = myAny;

export function absurd(): never {
  throw new Error("absurd has been called");
}

export const myNever = absurd();

/**
 * Object
 */
export const myObject: object = {
  a: "",
  b: null,
  c: myUnknown3,
};

/**
 * Record
 */
export const myRecord: Record<string, string> = {
  a: "a",
  b: "b",
};

export const myRecord2: Record<string, string> = {
  // @ts-expect-error
  a: 1,
  b: "b",
};

export const myRecord3: Record<"b" | "c", string> = {
  // @ts-expect-error
  a: 1,
  b: "b",
};
