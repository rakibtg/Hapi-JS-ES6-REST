import { defaultRoutes }      from './default/default.routes'
import { userRoutes }         from './user/user.routes'
import { authSignUpRoutes }   from './auth/signup/signup.routes'
import { authSignInRoutes }   from './auth/signin/signin.routes'

const routes = [
  defaultRoutes,
  userRoutes,
  authSignUpRoutes,
  authSignInRoutes,
]

export default routes