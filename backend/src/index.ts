import { Hono } from 'hono'

const app = new Hono()
// 120svIQ8cytv2Lle
// default
// DATABASE_URL="prisma://accelerate.prisma-data.net/?api_key=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhcGlfa2V5IjoiYzFiNGIyNTAtODA4ZS00NTNmLWJhYzUtOTA1NGRjNmRjYjE5IiwidGVuYW50X2lkIjoiZTIwYjFmYWYxNzdjZGZhMTEzNWFlNDJiOTEyNDc5YmIzNjE1MWI5YWE1MDU3YjIwMGY5MjVjYjk4MzFjNTRiYSIsImludGVybmFsX3NlY3JldCI6IjQ3MzRkNTE3LTVjMDktNDU0Yy05ZTg1LTk2NzJiZjIzZTkzYyJ9.AUja2uUG-Sy1Txgm03R4mw7IBoJ10C3CDJuLalsLaXI"
// port change
// DATABASE_URL="prisma://accelerate.prisma-data.net/?api_key=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhcGlfa2V5IjoiZDk4NjQzNDAtOGFjZS00M2QzLThmNDUtMjZmM2NjMzM4ZGMwIiwidGVuYW50X2lkIjoiMDlmYmQ0NjNjNzRjYjJjYmQxY2E1NmRiODhiOTk1OTkwOGNkZTNhNzE3MGUwYmE5MDM2NzVjMTRjYjc2NTk2MCIsImludGVybmFsX3NlY3JldCI6IjU3NzU4Zjg3LTgwMzYtNGMyZC1hODIzLWIzNzhjNjZmZGE5NyJ9.r_tioNl1Rr8ZX7yh3k22_tPKgGKn456x3rZ6OojMO98"
app.post('/api/v1/signup', (c) => {
  return c.text('signup successfully')
})
app.post('/api/v1/signin', (c) => {
  return c.text('signup successfully')
})

export default app
