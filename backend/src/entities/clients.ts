export interface ClientsProps {
  id: string
  name: string
  email: string
  phone: number
  password: string
}

export class Clients {
  private props: ClientsProps

  get name(): string {
    return this.props.name
  }

  get email(): string {
    return this.props.email
  }

  get phone(): number {
    return this.props.phone
  }

  get password(): string {
    return this.props.password
  }

  get id(): string {
    return this.props.id
  }

  constructor(props: ClientsProps) {
    this.props = props
  }
}
