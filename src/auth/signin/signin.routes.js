import { signIn } from './signin.controller'

export const authSignInRoutes = {
  path      : '/auth/signin',
  method    : 'POST',
  handler   : signIn
}