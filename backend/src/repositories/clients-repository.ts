import { Clients } from '../entities/clients'

export interface ClientsRepository {
  create(clients: Clients): Promise<void>
  findClientId(id: string): Promise<Clients | null>
}
