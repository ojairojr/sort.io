export interface RafflesAwards {
  id: string
  idRaffle?: string
  winningNumber: number | string
  prize: string
}

export class RaffleAward {
  private props: RafflesAwards

  get id(): string {
    return this.props.id
  }

  get idRaffle(): string | void {
    return this.props.idRaffle
  }

  get winningNumber(): number | string {
    return this.props.winningNumber
  }

  get prize(): string {
    return this.props.prize
  }
}
