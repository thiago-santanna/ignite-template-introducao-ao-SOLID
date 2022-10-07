/* eslint-disable no-param-reassign */
import { User } from "../../model/User";
import { IUsersRepository, ICreateUserDTO } from "../IUsersRepository";

class UsersRepository implements IUsersRepository {
  private users: User[];

  private static INSTANCE: UsersRepository;

  private constructor() {
    this.users = [];
  }

  public static getInstance(): UsersRepository {
    if (!UsersRepository.INSTANCE) {
      UsersRepository.INSTANCE = new UsersRepository();
    }

    return UsersRepository.INSTANCE;
  }

  create({ name, email }: ICreateUserDTO): User {
    const newUser = new User();
    newUser.name = name;
    newUser.email = email;
    this.users.push(newUser);
    return newUser;
  }

  findById(id: string): User | undefined {
    const findedUser = this.users.find((user) => user.id === id);
    if (findedUser) return findedUser;
    return undefined;
  }

  findByEmail(email: string): User | undefined {
    const findedUser = this.users.find((user) => user.email === email);
    if (findedUser) return findedUser;
    return undefined;
  }

  turnAdmin(receivedUser: User): User {
    // Complete aqui
    receivedUser.admin = true;
    receivedUser.updated_at = new Date();

    this.users = [...this.users, receivedUser];

    return receivedUser;
  }

  list(): User[] {
    return this.users;
  }
}

export { UsersRepository };
