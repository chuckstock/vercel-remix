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

export const loader = async () => {
  return json({ ok: true })
}

function App() {
  return (
    <html lang='en'>
      <head>
        <Meta />
        <Links />
      </head>
      <body>
        <Outlet />
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
        <Analytics />
      </body>
    </html>
  )
}

export default withSentry(App)
