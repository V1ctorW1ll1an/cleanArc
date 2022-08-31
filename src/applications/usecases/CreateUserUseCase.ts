import { UserEntity } from "../../domain/entities/UserEntity"
import { ICreateUserRepository } from "../../infra/CreateUserRepository"

interface IUserInputProps {
    name: string
    email: string
    password: string
}

interface IUserOutputProps {
    id: string
    name: string
    email: string
    password: string
}

class CreateUserUseCase {
    constructor(private readonly createUserRepository: ICreateUserRepository) {}
    async execute(user: IUserInputProps): Promise<IUserOutputProps> {
        const userEntity = new UserEntity({
            name: user.name,
            email: user.email,
            password: user.password,
        })
        const userRegistered = await this.createUserRepository.createUser(
            userEntity
        )
        return {
            id: userRegistered.props.id,
            name: userRegistered.props.name,
            email: userRegistered.props.email,
            password: userRegistered.props.password,
        }
    }
}

export { CreateUserUseCase, IUserInputProps, IUserOutputProps }
