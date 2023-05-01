import type { LoaderArgs } from '@vercel/remix'
import { redirect } from '@vercel/remix'

export async function loader({ params, request }: LoaderArgs) {
  const url = new URL(request.url)
  throw redirect(`/b/${params.slug}/quests${url.search}`)
}
