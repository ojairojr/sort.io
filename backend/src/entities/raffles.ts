export interface RafflesProps {
  id: string
  name: string
  date: Date | number
  prize: string | number
  secundaryPrizes: number[]
  createdAt: Date | number
  owner?: string
  winningNumber?: number
  idUser: string
}

export class Raffles {
  private props: RafflesProps

  get id(): string {
    return this.props.id
  }

  get name(): string {
    return this.props.name
  }

  get date(): Date | number {
    return this.props.date
  }

  get prize(): string | number {
    return this.props.prize
  }

  get secundaryPrizes(): number[] {
    return this.props.secundaryPrizes
  }

  get createdAt(): Date | number {
    return this.props.createdAt
  }

  get owner(): string | void {
    return this.props.owner
  }

  get winningNumber(): number | void {
    return this.props.winningNumber
  }

  get idUser(): string {
    return this.props.idUser
  }

  constructor(props: RafflesProps) {
    this.props = props
  }
}
