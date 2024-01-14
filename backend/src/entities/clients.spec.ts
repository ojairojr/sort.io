import { expect, test } from 'vitest'
import { idUnique as id } from '../utils/generateUniqueId'
import { Clients } from './clients'

test('create a new client', () => {
  const clients = new Clients({
    id,
    name: 'John Doe',
    email: 'johndoe@gmail.com',
    phone: 11911112222,
    password: 'johndoe123',
  })
  expect(clients).toBeInstanceOf(Clients)
  expect(clients.name).toEqual('John Doe')
})
