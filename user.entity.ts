import { v4 as uuidv4 } from 'uuid';

export interface IUser {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
}

export class User implements IUser {
  id: string;
  firstName: string;
  lastName: string;
  email: string;

  constructor(firstName: string, lastName: string, email: string) {
    this.id = uuidv4();
    this.firstName = firstName;
    this.lastName = lastName;
    this.email = email;
  }
}

const user1 = new User('John', 'Doe', 'john.doe@example.com');
console.log(user1);
