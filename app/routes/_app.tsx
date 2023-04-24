import { Outlet } from '@remix-run/react'
import { json } from '@vercel/remix'
export const loader = async () => {
  return json({ ok: true })
}

export default function App() {
  return <Outlet />
}
