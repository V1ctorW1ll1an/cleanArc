// test user entity

import { UserEntity, IUserEntityProps, Email, Password } from "../UserEntity"

describe("UserEntity", () => {
    it("should throw error without email", () => {
        expect(() => Email.create("")).toThrowError("Email is required")
    })

    it("should throw error without password", () => {
        expect(() => Password.create("")).toThrowError("Password is required")
    })

    it("should throw error with invalid email length", () => {
        expect(() => Email.create("a".repeat(256))).toThrowError(
            "Email is too long"
        )

        expect(() => Email.create("a".repeat(2))).toThrowError(
            "Email is too short"
        )
    })

    it("should throw error with password password length", () => {
        expect(() => Password.create("a".repeat(256))).toThrowError(
            "Password is too long"
        )

        expect(() => Password.create("a".repeat(2))).toThrowError(
            "Password is too short"
        )
    })

    it("should throw error with invalid email", () => {
        expect(() => Email.create("invalid")).toThrowError("Email is invalid")

        expect(() => Email.create("invalid@")).toThrowError("Email is invalid")

        expect(() => Email.create("invalid@invalid")).toThrowError(
            "Email is invalid"
        )

        expect(() => Email.create("invalid@invalid.")).toThrowError(
            "Email is invalid"
        )
    })

    it("should not create a user without name", () => {
        const userProps: IUserEntityProps = {
            id: "id",
            name: "",
            email: Email.create("jonhdoe@gmail.com"),
            password: Password.create("12345"),
        }

        expect(() => UserEntity.create(userProps)).toThrowError(
            "Name is required"
        )
    })

    it("should create a user", () => {
        const userProps: IUserEntityProps = {
            id: "id",
            name: "name",
            email: Email.create("jonhdoe@gmail.com"),
            password: Password.create("12345"),
        }

        const user = UserEntity.create(userProps)

        expect(user.id).toBe(userProps.id)
        expect(user.name).toBe(userProps.name)
        expect(user.email.value).toBe(userProps.email.value)
        expect(user.password.value).toBe(userProps.password.value)
    })
})
