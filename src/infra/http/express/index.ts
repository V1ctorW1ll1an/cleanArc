import express, { Express, Request, Response } from "express"
import { CreateUserUseCase } from "../../../applications/usecases/CreateUserUseCase"
import { CreateUserRepositoryInMemory } from "../../db/CreateUserRepositoryInMemory"

const app: Express = express()

app.use(express.json())
const port = 3001

// para manter a memoria
const createUserRepository = new CreateUserRepositoryInMemory()

app.post("/api/user/createuser", async (req: Request, res: Response) => {
    try {
        const createUserUseCase = new CreateUserUseCase(createUserRepository)
        const { name, email, password } = req.body

        const registeredUser = await createUserUseCase.execute({
            name,
            email,
            password,
        })

        return res.status(201).send(registeredUser)
    } catch (error: any) {
        res.status(400).json({ error: error.message })
    }
})

app.listen(port, () => {
    console.log(`Server rodando na porta ${port}`)
})
