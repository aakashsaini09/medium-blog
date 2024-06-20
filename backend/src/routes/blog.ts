
import { Hono } from "hono";
import { withAccelerate } from '@prisma/extension-accelerate'
import { PrismaClient } from '@prisma/client/edge'
import { sign, verify } from 'hono/jwt';
export const blogRoute = new Hono<{
	Bindings: {
		DATABASE_URL: string,
        JWT_SEC: string
	}
}>();

blogRoute.post('/*', async(c, next) => {
    
    next()
})
blogRoute.post('/', async(c) => {
    const prisma = new PrismaClient({
        datasourceUrl: c.env.DATABASE_URL,
    }).$extends(withAccelerate())
    const body = await c.req.json()
      const blog = await prisma.blog.create({
        data: {
            title: body.title,
            content: body.content,
            authorId: 1
        }
      })
     return c.json({
        id: blog.id
     })
})

    // *********************************************update blog********************************************
    blogRoute.put('/', async(c) => {
        const prisma = new PrismaClient({
            datasourceUrl: c.env.DATABASE_URL,
        }).$extends(withAccelerate())
        
        const body = await c.req.json()
        const user = await prisma.blog.update({
            where: {
                id: body.id
            },
            data: {
                title: body.title,
                content: body.content,
            }
        });
    })
    
    // *********************************************get blogs of one user********************************************
    blogRoute.get('/', async (c) => {
        const prisma = new PrismaClient({
            datasourceUrl: c.env.DATABASE_URL,
        }).$extends(withAccelerate())
        const body = await c.req.json()
        try {
            
            const blog = await prisma.blog.findFirst({
                where: {
                    id: body.id
                }
            })
            return c.json({
                blog
            })
        } catch (error) {
            c.status(411);
            return c.json({
                message: "Error while fetching blog post",
                err: error
            })
        }
    })
    
    // *********************************************get all the blogs********************************************
    blogRoute.get('/bulk', async (c) => {
        const prisma = new PrismaClient({
            datasourceUrl: c.env.DATABASE_URL,
        }).$extends(withAccelerate())
        try {
            const blogs = await prisma.blog.findMany()
            return c.json({
                blogs
            })
        } catch (error) {
            c.status(411);
            return c.json({
                message: "Error while fetching blog post",
                err: error
            })
        }
    })