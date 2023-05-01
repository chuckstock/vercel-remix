import { RemixServer } from '@remix-run/react'
import type { EntryContext } from '@vercel/remix'
import isbot from 'isbot'
import { renderToPipeableStream } from 'react-dom/server'
import { renderHeadToString } from 'remix-island'
import { PassThrough } from 'stream'
import { Head } from './root'

const ABORT_DELAY = 5000

export default function handleRequest(
  request: Request,
  responseStatusCode: number,
  responseHeaders: Headers,
  remixContext: EntryContext
) {
  return isbot(request.headers.get('user-agent'))
    ? handleBotRequest(
        request,
        responseStatusCode,
        responseHeaders,
        remixContext
      )
    : handleBrowserRequest(
        request,
        responseStatusCode,
        responseHeaders,
        remixContext
      )
}

function handleBotRequest(
  request: Request,
  responseStatusCode: number,
  responseHeaders: Headers,
  remixContext: EntryContext
) {
  return new Promise((resolve, reject) => {
    let didError = false

    const { pipe, abort } = renderToPipeableStream(
      <RemixServer context={remixContext} url={request.url} />,
      {
        onAllReady() {
          const body = new PassThrough()
          const head = renderHeadToString({ request, remixContext, Head })

          responseHeaders.set('Content-Type', 'text/html')

          resolve(
            // @ts-expect-error
            new Response(body, {
              headers: responseHeaders,
              status: didError ? 500 : responseStatusCode,
            })
          )

          body.write(`<!DOCTYPE html><html><head>
            <meta name='viewport' content='width=device-width,initial-scale=1' />
            <meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />

            <link
              id='favicon'
              rel='icon'
              type='image/png'
              sizes='32x32'
              href='favicon.ico'
            />
            ${head}
            </head><body><div id="root">`)
          pipe(body)
          body.write(`</div></body></html>`)
        },
        onShellError(error: unknown) {
          reject(error)
        },
        onError(error: unknown) {
          didError = true

          console.error(error)
        },
      }
    )

    setTimeout(abort, ABORT_DELAY)
  })
}

function handleBrowserRequest(
  request: Request,
  responseStatusCode: number,
  responseHeaders: Headers,
  remixContext: EntryContext
) {
  return new Promise((resolve, reject) => {
    let didError = false

    const { pipe, abort } = renderToPipeableStream(
      <RemixServer context={remixContext} url={request.url} />,
      {
        onShellReady() {
          const body = new PassThrough()
          const head = renderHeadToString({ request, remixContext, Head })

          responseHeaders.set('Content-Type', 'text/html')

          resolve(
            // @ts-expect-error
            new Response(body, {
              headers: responseHeaders,
              status: didError ? 500 : responseStatusCode,
            })
          )

          body.write(`<!DOCTYPE html><html><head>
            <meta name='viewport' content='width=device-width,initial-scale=1' />
            <meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />

            <link
              id='favicon'
              rel='icon'
              type='image/png'
              sizes='32x32'
              href='favicon.ico'
            />
            ${head}
            </head><body><div id="root">`)
          pipe(body)
          body.write(`</div></body></html>`)
        },
        onShellError(err: unknown) {
          reject(err)
        },
        onError(error: unknown) {
          didError = true

          console.error(error)
        },
      }
    )
    setTimeout(abort, ABORT_DELAY)
  })
}
