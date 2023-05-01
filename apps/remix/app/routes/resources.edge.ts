import { json } from '@vercel/remix'

export const config = { runtime: 'edge' }

export const loader = () => {
  return json({ hello: 'world' })
}
