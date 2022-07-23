import { User, ParsedUser } from '@/entities/models/user'

export const parsedUsers = (users: User[]): ParsedUser[] => {
  return users.map((user) => {
    const { suite, street, city, zipcode } = user.address
    return {
      ...user,
      address: `${suite} ${street} ${city} ${zipcode}`.trim()
    }
  })
}