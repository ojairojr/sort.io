import { hash } from 'bcrypt'
import { z } from 'zod'
import { Clients } from '../entities/clients'
import { ClientsRepository } from '../repositories/clients-repository'

interface CreateClientRequest {
  id: string
  name: string
  email: string
  phone: number
  password: string
}

type CreateClientResponse = Clients

export class CreateClient {
  constructor(private clientsRepository: ClientsRepository) {}

  async execute({
    id,
    name,
    email,
    phone,
    password,
  }: CreateClientRequest): Promise<CreateClientResponse> {
    const userExists = await this.clientsRepository.findClientId(id)

    if (userExists) {
      throw new Error('User already exists')
    }

    const bodySchema = z.object({
      id: z.string(),
      name: z.string(),
      email: z.string().email(),
      phone: z.number(),
      password: z.string().min(8),
    })

    const response = bodySchema.parse({ id, name, email, phone, password })

    if (!response) {
      throw new Error('Dados inválidos, tente novamente.')
    }

    const passHashed = await hash(password, 10)

    const client = new Clients({ id, name, email, phone, password: passHashed })

    await this.clientsRepository.create(client)

    return client
  }
}
