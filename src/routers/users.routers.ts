import { Router } from 'express'
import { loginController } from '~/controllers/users.controllers'
import { LoginValidator } from '~/middlewares/users.middlewares'
const usersRouter = Router()

usersRouter.post('/login', LoginValidator, loginController)

export default usersRouter
