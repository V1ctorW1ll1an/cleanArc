import { UserEntity } from "../domain/entities/UserEntity"
import { ICreateUserRepository } from "./CreateUserRepository"

class CreateUserRepositoryInMemory implements ICreateUserRepository {
    public users: Array<UserEntity> = []
    async createUser(user: UserEntity): Promise<UserEntity> {
        this.users.push(user)
        return user
    }
}

export { CreateUserRepositoryInMemory }
