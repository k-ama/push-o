import { action } from 'typesafe-actions'

export const ActionsTypes = {
  USER_PUSH: 'USER_PUSH',
  TIMEOUT: 'TIMEOUT'
}

export const Actions = {
  userPush: () => action(ActionsTypes.USER_PUSH),
  timeout: () => action(ActionsTypes.TIMEOUT)
}