import { Raffles } from '../entities/raffles'

export interface RafflesRepository {
  create(raffles: Raffles): Promise<void>
}
