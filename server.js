import express from 'express'; 
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient() 

const app = express()
app.use(express.json())

app.post('/users', async (req, res) => {

    await prisma.user.create({
        data: {
            name: req.body.name,
            email: req.body.email,
            password: req.body.password
        }
    })
    
    users.push(req.body)

    res.send(201)
})

app.get('/users', async (req, res) => {
    let users = []
    
    if(req.query) {
        users = await prisma.user.findMany({
            where: {
                name: req.query.name,
                email: req.query.email,
                age: req.query.age
            }
        })
    } else {
        users = await prisma.user.findMany()
    }
    
    res.status(200).json(users)
})

app.put('/users', async (req, res) => {

    await prisma.user.update({
        where: {
            id: req.params.id
        },
        data: {
            name: req.body.name,
            email: req.body.email,
            password: req.body.password
        }
    })
    
    users.push(req.body)

    res.send(201)
})

app.delete('/users', async (req, res) => {

    await prisma.user.delete({
        where: {
            id: req.params.id
        }
    })
    
    users.push(req.body)

    res.send(201)
})

app.listen(3000)

/*
Username bd: Arthur
Senha bd: 3Fe3tXS0FecVQsnY

*/