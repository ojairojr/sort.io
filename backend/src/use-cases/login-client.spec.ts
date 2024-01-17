import { describe, expect, it } from 'vitest'
import { Clients } from '../entities/clients'
import { InMemoryClientsRepository } from '../repositories/in-memory/in-memory-clients-repository'
import { idUnique as id } from '../utils/generateUniqueId'
import { CreateClient } from './create-client'
import { LoginClient } from './login-client'

describe('Login', () => {
  it('should be able to login', async () => {
    const clientRepository = new InMemoryClientsRepository()
    const loginClient = new LoginClient(clientRepository)
    const userClient = new CreateClient(clientRepository)

    await userClient.execute({
      id,
      name: 'John Doe',
      email: 'johndoe@gmail.com',
      phone: 11922223333,
      password: 'johndoe123',
    })

    expect(
      loginClient.execute({
        email: 'johndoe@gmail.com',
        pass: 'johndoe123',
      }),
    ).resolves.toBeInstanceOf(Clients)
  })

  it('should not be able to login', async () => {
    const clientRepository = new InMemoryClientsRepository()
    const loginClient = new LoginClient(clientRepository)
    const userClient = new CreateClient(clientRepository)

    await userClient.execute({
      id,
      name: 'John Doe',
      email: 'johndoe@gmail.com',
      phone: 11922223333,
      password: 'johndoe123',
    })

    expect(
      loginClient.execute({
        email: 'johndoe@gmail.com',
        pass: 'incorrect-password',
      }),
    ).rejects.toBeInstanceOf(Error)

    expect(
      loginClient.execute({
        email: 'incorrect-email@gmail.com',
        pass: 'johndoe123',
      }),
    ).rejects.toBeInstanceOf(Error)
  })
})
