import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/login')({
  beforeLoad: ({ search }) => {
    console.log(search);
    // TODO: finish this
  }
})
