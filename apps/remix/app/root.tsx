import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from '@remix-run/react'
import { withSentry } from '@sentry/remix'
import { Analytics } from '@vercel/analytics/react'
import { json } from '@vercel/remix'
import { createHead } from 'remix-island'

export const loader = async () => {
  return json({ ok: true })
}

export const Head = createHead(() => (
  <>
    <Meta />
    <Links />
  </>
))

function App() {
  return (
    <>
      <Head />
      <Outlet />
      <ScrollRestoration />
      <Scripts />
      <LiveReload />
      <Analytics />
    </>
  )
}

export default withSentry(App)
