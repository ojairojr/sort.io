import { expect, test } from 'vitest'
import { idUnique as id } from '../utils/generateUniqueId'
import { generateNumbersArray } from '../utils/generateWinningNumbers'
import { Raffles } from './raffles'

test('create a new raffle', () => {
  const secundaryPrizes = generateNumbersArray(4)
  const raffles = new Raffles({
    id,
    name: 'Sorteio do ano',
    prize: 'R$ 10.000,00',
    date: Date.now(),
    createdAt: Date.now(),
    secundaryPrizes,
    idUser: id,
  })
  expect(raffles).toBeInstanceOf(Raffles)
})
