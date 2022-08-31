import { UserEntity } from "../domain/entities/UserEntity"

interface ICreateUserRepository {
    createUser(user: UserEntity): Promise<UserEntity>
}

export { ICreateUserRepository }
