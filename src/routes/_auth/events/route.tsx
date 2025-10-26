import { ROUTES } from '@/lib/routes'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute(ROUTES.AUTH.EVENTS)({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/_auth/events"!</div>
}
