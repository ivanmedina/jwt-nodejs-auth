import express from 'express'
import morgan from 'morgan'
import pkg from '../package.json'

import { createRoles } from './libs/initialSetup'

import productsRoutes from './routes/products.routes'

import appRoutes from './routes/auth.routes'

import userRoutes from './routes/user.routes'

const app = express()

createRoles();

app.set('pkg',pkg)

app.use(morgan('dev'))

app.use(express.json())

app.get('/',(req,res)=>{
    res.json({
        author: app.get('pkg').name,
        description: app.get('pkg').description,
        version: app.get('pkg').version
    });
})

app.use('/products',productsRoutes)
app.use('/auth',appRoutes)
app.use('/users',userRoutes)

export default app