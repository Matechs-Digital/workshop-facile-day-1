export interface Person {
  readonly firstName: string;
  readonly lastName: string;

  readonly send: (message: string) => void;
}

class PersonImpl implements Person {
  public firstName: string;
  public lastName: string;

  constructor(firstName: string, lastName: string) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.send = this.send.bind(this);
  }

  send(message: string) {
    console.log(`Hey ${this.firstName} ${this.lastName} : ${message}`);
  }
}

export function makePerson(firstName: string, lastName: string): Person {
  return new PersonImpl(firstName, lastName);
}

export const person = makePerson("Michael", "Arnaldi");
