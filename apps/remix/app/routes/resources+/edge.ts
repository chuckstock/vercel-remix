import { json } from '@vercel/remix'

export const config = { runtime: 'edge' }

export async function loader() {
  return json({ ok: true })
}
