import { Outlet } from '@remix-run/react'

export default function Test() {
  return (
    <div>
      <div style={{ fontFamily: 'system-ui, sans-serif', lineHeight: '1.4' }}>
        BASES
      </div>
      <Outlet />
    </div>
  )
}
