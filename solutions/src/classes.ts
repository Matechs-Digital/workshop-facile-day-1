export class Person {
  public firstName: string;
  public lastName: string;

  constructor(firstName: string, lastName: string) {
    this.firstName = firstName;
    this.lastName = lastName;
  }

  send(message: string) {
    console.log(`Hey ${this.firstName} ${this.lastName} : ${message}`);
  }
}

export const person = new Person("Michael", "Arnaldi");

person.send("ping");
