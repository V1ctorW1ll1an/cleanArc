import crypto from "crypto"

type UserEntityProps = {
    id?: string
    name: string
    email: string
    password: string
}

class UserEntity {
    public props: Required<UserEntityProps>
    constructor(props: UserEntityProps) {
        this.props = {
            ...props,
            id: props.id || crypto.randomUUID(),
        }
    }
}

export { UserEntity, UserEntityProps }
