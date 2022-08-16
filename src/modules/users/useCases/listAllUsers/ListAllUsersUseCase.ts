import { User } from "../../model/User";
import { IUsersRepository } from "../../repositories/IUsersRepository";

interface IRequest {
  user_id: string;
}

class ListAllUsersUseCase {
  constructor(private usersRepository: IUsersRepository) {}

  execute({ user_id }: IRequest): User[] {
    const isAdm = this.usersRepository.findById(user_id).admin;

    if (!isAdm) {
      throw new Error("User is not admin!");
    }

    return this.usersRepository.list();
  }
}

export { ListAllUsersUseCase };
