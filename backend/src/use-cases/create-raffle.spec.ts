import { describe, expect, it } from 'vitest'
import { Raffles } from '../entities/raffles'
import { InMemoryRafflesRepository } from '../repositories/in-memory/in-memory-raffles-repository'
import { idUnique as id } from '../utils/generateUniqueId'
import { generateNumbersArray as arrayNumber } from '../utils/generateWinningNumbers'
import { CreateRaffle } from './create-raffle'

describe('create raffle', () => {
  it('should be able to create a new raffle', () => {
    const raffleRepository = new InMemoryRafflesRepository()
    const createRaffle = new CreateRaffle(raffleRepository)

    expect(
      createRaffle.execute({
        id,
        name: 'Happy new year',
        prize: '10 cars',
        secundaryPrizes: arrayNumber(5),
        date: Date.now(),
        createdAt: Date.now(),
        idUser: id,
      }),
    ).resolves.toBeInstanceOf(Raffles)
  })
})
