export interface Person {
  firstName: string;
  lastName: string;
}

export const person: Person = {
  firstName: "Michael",
  lastName: "Arnaldi",
};

export type PersonType = {
  readonly firstName: string;
  readonly lastName: string;
};
