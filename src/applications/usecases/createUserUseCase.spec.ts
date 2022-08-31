import { UserEntity } from "../../domain/entities/UserEntity"
import { CreateUserRepositoryInMemory } from "../../infra/CreateUserRepositoryInMemory"
import { CreateUserUseCase } from "./CreateUserUseCase"

describe("CreateUserUseCase", () => {
    it("should create a user", async () => {
        const createUserRepository = new CreateUserRepositoryInMemory()
        const sud = new CreateUserUseCase(createUserRepository)
        const user = await sud.execute(
            new UserEntity({
                name: "Sud",
                email: "sud@gmail.com",
                password: "123456",
            })
        )

        const registeredUser = await sud.execute(user)

        expect(registeredUser.props.id).not.toBeFalsy()
    })
})
