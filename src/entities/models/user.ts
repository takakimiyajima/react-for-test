export type Address = {
  city: string
  suite: string
  street: string
  zipcode: string
}

export type User = {
  id: number
  name: string
  email: string
  phone: string
  address: Address
  website: string
}

export type ParsedUser = {
  id: number
  name: string
  email: string
  phone: string
  address: string
  website: string
}
