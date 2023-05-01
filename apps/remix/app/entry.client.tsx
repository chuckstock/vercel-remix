import { RemixBrowser } from '@remix-run/react'
import { StrictMode, startTransition } from 'react'
import { hydrateRoot } from 'react-dom/client'

const hydrate = () => {
  startTransition(() => {
    hydrateRoot(
      document.getElementById('root')!,
      <StrictMode>
        <RemixBrowser />
      </StrictMode>
    )
  })
}

if (typeof requestIdleCallback === 'function') {
  window.requestIdleCallback(hydrate)
} else {
  // Safari doesn't support requestIdleCallback
  // https://caniuse.com/requestidlecallback
  window.setTimeout(hydrate, 1)
}
