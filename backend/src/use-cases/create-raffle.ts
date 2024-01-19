import { Raffles } from '../entities/raffles'
import { RafflesRepository } from '../repositories/raffles-repository'

interface CreateRaffleRequest {
  id: string
  name: string
  date: Date | number
  prize: string | number
  secundaryPrizes: number[]
  createdAt: Date | number
  idUser: string
}
type CreateRaffleResponse = Raffles

export class CreateRaffle {
  constructor(private rafflesRepository: RafflesRepository) {}
  async execute({
    id,
    name,
    prize,
    secundaryPrizes,
    idUser,
    date,
    createdAt,
  }: CreateRaffleRequest): Promise<CreateRaffleResponse> {
    const raffle = new Raffles({
      id,
      name,
      prize,
      secundaryPrizes,
      idUser,
      date,
      createdAt,
    })

    await this.rafflesRepository.create(raffle)
    return raffle
  }
}
