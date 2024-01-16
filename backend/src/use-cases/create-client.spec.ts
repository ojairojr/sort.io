import { describe, expect, it } from 'vitest'
import { Clients } from '../entities/clients'
import { InMemoryClientsRepository } from '../repositories/in-memory/in-memory-clients-repository'
import { idUnique as id } from '../utils/generateUniqueId'
import { CreateClient } from './create-client'

describe('Create client', () => {
  it('should be able to create a new client', () => {
    const clientRepository = new InMemoryClientsRepository()
    const createClient = new CreateClient(clientRepository)

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

  it('should not be able to create a new user', async () => {
    const clientRepository = new InMemoryClientsRepository()
    const createClient = new CreateClient(clientRepository)

    await createClient.execute({
      id: '123',
      name: 'John Doe',
      email: 'johndoe@gmail.com',
      phone: 11922223333,
      password: 'johndoe123',
    })

    expect(
      createClient.execute({
        id: '123',
        name: 'John Doe',
        email: 'johndoe@gmail.com',
        phone: 11922223333,
        password: 'johndoe123',
      }),
    ).rejects.toBeInstanceOf(Error)

    expect(
      createClient.execute({
        id,
        name: 'John Doe',
        email: 'johndoe@gmail.com',
        phone: 11922223333,
        password: 'johndoe',
      }),
    ).rejects.toBeInstanceOf(Error)

    expect(
      createClient.execute({
        id,
        name: 'John Doe',
        email: 'johndoegmail.com',
        phone: 11922223333,
        password: 'johndoe123',
      }),
    ).rejects.toBeInstanceOf(Error)
  })
})
