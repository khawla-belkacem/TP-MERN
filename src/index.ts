import express, {Request, Response} from 'express'

const app = express()

const port = 8000;

app.use('/sum/:a/:b', (request: Request, response: Response)=>{
    const {params: {a, b}} = request
    const sum = Number(a) + Number(b)
    response.status(200).send(`La somme de ${a} + ${b} egale à: ${sum}`)
})


app.listen(port, ()=>{
    console.log(`Server listening on port ${port}`)
})