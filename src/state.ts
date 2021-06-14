import { makeVar } from '@apollo/client'
import { User } from 'types'

export const myInfo = makeVar<User | null>(null)
