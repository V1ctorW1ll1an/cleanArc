import { CreateUserRepositoryInMemory } from "../../infra/db/CreateUserRepositoryInMemory"
import { CreateUserUseCase } from "./CreateUserUseCase"

describe("CreateUserUseCase", () => {
    it("should create a user", async () => {
        const createUserRepository = new CreateUserRepositoryInMemory()
        const sud = new CreateUserUseCase(createUserRepository)
        const user = await sud.execute({
            name: "John Doe",
            email: "john@gmail.com",
            password: "123456",
        })

        const registeredUser = await sud.execute(user)

        expect(registeredUser.id).not.toBeFalsy()
    })
})
