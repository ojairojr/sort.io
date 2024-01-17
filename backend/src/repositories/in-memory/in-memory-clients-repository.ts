import { compare } from 'bcrypt'
import { Clients } from '../../entities/clients'
import { ClientsRepository } from '../clients-repository'

export class InMemoryClientsRepository implements ClientsRepository {
  public items: Clients[] = []
  async create(clients: Clients): Promise<void> {
    console.log(this.items)
    this.items.push(clients)
  }

  async findClientId(id: string): Promise<null | Clients> {
    const client = this.items.find((client) => client.id === id)
    if (!client) {
      return null
    }
    return client
  }

  async findClientEmail(email: string): Promise<null | Clients> {
    const client = this.items.find((client) => client.email === email)
    if (!client) {
      return null
    }
    return client
  }

  async loginClient(email: string, pass: string): Promise<Clients> {
    const client = await this.findClientEmail(email)
    if (!client) {
      throw new Error('User does not exists')
    }
    const isMatch = await compare(pass, client.password)
    if (!isMatch) {
      throw new Error('Invalid password.')
    }
    return client
  }
}
