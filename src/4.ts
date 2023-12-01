class Key {
   private signature: number;
   constructor() {
      this.signature = Math.random();
   }
   getSignature(): number {
       return this.signature;
      }
};

class Person {
   constructor(private key: Key) { }
   getKey(): Key {
      return this.key;
   }
}

abstract class House {
   protected door: boolean = false;
   protected tenants: Person[] = [];
   constructor(protected key: Key) { }
   public comeIn(person: Person) {
      if (this.door !== true) {
         console.log("GoodBye!")
         return;
      }
      this.tenants.push(person);
   }
   abstract openDoor(key: Key): void;
}

class MyHouse extends House {
   openDoor(key: Key): void {
      if (key.getSignature() !== this.key.getSignature()) {
         console.log("GoodBye!");
         return;
      }
      this.door = true;
      console.log("Come in!");
   }
}


const key = new Key();

const house = new MyHouse(key);
const person = new Person(key);

house.openDoor(person.getKey());

house.comeIn(person);


export {};