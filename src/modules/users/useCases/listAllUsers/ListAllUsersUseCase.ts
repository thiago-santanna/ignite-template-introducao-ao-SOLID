import { User } from "../../model/User";
import { IUsersRepository } from "../../repositories/IUsersRepository";

interface IRequest {
  user_id: string;
}

class ListAllUsersUseCase {
  constructor(private usersRepository: IUsersRepository) {}

  execute({ user_id }: IRequest): User[] {
    const users = this.usersRepository.list();

    const userFinded = users.find((user) => user.id === user_id);

    if (!userFinded) {
      throw new Error("Mensagem do erro");
    }

    const isAdmin = userFinded.admin;
    if (!isAdmin) {
      throw new Error("Mensagem do erro");
    }

    return users;
  }
}

export { ListAllUsersUseCase };
