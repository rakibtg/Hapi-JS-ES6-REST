import { users } from './user.controller'

export const userRoutes = {
  path      : '/users',
  method    : 'GET',
  handler   : users
}