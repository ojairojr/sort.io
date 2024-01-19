import { Raffles } from '../../entities/raffles'
import { RafflesRepository } from '../raffles-repository'

export class InMemoryRafflesRepository implements RafflesRepository {
  public items: Raffles[] = []
  async create(raffles: Raffles): Promise<void> {
    console.log(this.items)
    this.items.push(raffles)
  }
}
