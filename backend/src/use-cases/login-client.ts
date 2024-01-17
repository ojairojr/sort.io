import { Clients } from '../entities/clients'
import { ClientsRepository } from '../repositories/clients-repository'

interface LoginClientRequest {
  email: string
  pass: string
}
type LoginClientResponse = Clients

export class LoginClient {
  constructor(private clientsRepository: ClientsRepository) {}

  async execute({
    email,
    pass,
  }: LoginClientRequest): Promise<LoginClientResponse> {
    const userExists = await this.clientsRepository.findClientEmail(email)

    if (!userExists) {
      throw new Error('User does not found')
    }

    return await this.clientsRepository.loginClient(email, pass)
  }
}
