import { Clients } from '../entities/clients'

interface CreateClientRequest {
  id: string
  name: string
  email: string
  phone: number
  password: string
}

type CreateClientResponse = Clients

export class CreateClient {
  async execute({
    id,
    name,
    email,
    phone,
    password,
  }: CreateClientRequest): Promise<CreateClientResponse> {
    const client = new Clients({ id, name, email, phone, password })

    return client
  }
}
