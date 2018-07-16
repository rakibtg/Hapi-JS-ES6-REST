import { signUp } from './signup.controller'

export const authSignUpRoutes = {
  path      : '/auth/signup',
  method    : 'POST',
  handler   : signUp
}