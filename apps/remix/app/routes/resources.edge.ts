import { json } from '@vercel/remix'

export const loader = () => {
  return json({ hello: 'world' })
}
