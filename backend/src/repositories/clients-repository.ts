import { Clients } from '../entities/clients'

export interface ClientsRepository {
  create(clients: Clients): Promise<void>
  findClientId(id: string): Promise<Clients | null>
  findClientEmail(email: string): Promise<Clients | null>
  loginClient(email: string, pass: string): Promise<Clients>
}
