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

    const client = new Clients({ id, name, email, phone, password })

    await this.clientsRepository.create(client)

    return client
  }
}
