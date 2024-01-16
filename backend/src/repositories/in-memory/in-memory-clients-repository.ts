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
}
