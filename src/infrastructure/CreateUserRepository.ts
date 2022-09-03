import { UserEntity } from "../entities/UserEntity"

interface ICreateUserRepository {
    createUser(user: UserEntity): Promise<UserEntity>
}

export { ICreateUserRepository }
