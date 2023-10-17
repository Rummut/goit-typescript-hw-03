class Key {
  private signature: number;
  constructor() {
    this.signature = Math.random();
  }
  getSignature(): number {
    return this.signature;
  }
}

class Person {
  private key: Key;
  constructor(key: Key) {
    this.key = key;
  }

  getKey(): Key {
    return this.key;
  }
}

abstract class House {
  public door: boolean = false;
  public key: Key;
  public tenants: Person[] = [];

  constructor(key: Key) {
    this.key = key;
  }

  comeIn(person: Person) {
    if (this.door === true) {
      return this.tenants.push(person);
    }
  }

  abstract openDoor(key: Key): void;
}

class MyHouse extends House {
  openDoor(key: Key) {
    if (key.getSignature() === this.key.getSignature()) {
      return (this.door = true);
    }
  }
}

const key = new Key();

const house = new MyHouse(key);
const person = new Person(key);

house.openDoor(person.getKey());

house.comeIn(person);

export {};
