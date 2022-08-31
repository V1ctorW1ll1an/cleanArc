import { UserEntity } from "../domain/entities/UserEntity"
import { CreateUserRepositoryInMemory } from "./CreateUserRepositoryInMemory"

describe("CreateUserRepositoryInMemory", () => {
    it("should insert a user in repository", async () => {
        const sud = new CreateUserRepositoryInMemory()
        const user = new UserEntity({
            name: "Sud",
            email: "sud@gmail.com",
            password: "123456",
        })

        const registeredUser = await sud.createUser(user)

        expect(sud.users.length).toBe(1)
        expect(registeredUser).toStrictEqual(sud.users[0])
    })
})
