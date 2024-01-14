import { describe, expect, it } from 'vitest'
import { Clients } from '../entities/clients'
import { idUnique as id } from '../utils/generateUniqueId'
import { CreateClient } from './create-client'

describe('Create client', () => {
  it('should be able to create a new client', () => {
    const createClient = new CreateClient()

    expect(
      createClient.execute({
        id,
        name: 'John Doe',
        email: 'johndoe@gmail.com',
        phone: 11922223333,
        password: 'johndoe123',
      }),
    ).resolves.toBeInstanceOf(Clients)
  })
})
