import { UserEntity } from "../../domain/entities/UserEntity"
import { ICreateUserRepository } from "../../infra/CreateUserRepository"

class CreateUserUseCase {
    constructor(private readonly createUserRepository: ICreateUserRepository) {}
    async execute(user: UserEntity): Promise<UserEntity> {
        return this.createUserRepository.createUser(user)
    }
}

export { CreateUserUseCase }
