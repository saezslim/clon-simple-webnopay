import express from 'express'
import fetch from "node-fetch";


const app = express()
const PORT = 3005
app.set('view engine', 'ejs')

app.use(express.static('public'));

app.use(express.json())

let total

app.post('/', async (req, res) =>{
    const { body } = req
    //console.log({ body })
    // Falta obtener el valor total y pintarlo por webnopay
    const boleta = { dinero: body.dinero, tipoPago: body.tipoPago }
    //console.log(boleta)
    const precioFinal = body.dinero + (10 * (body.dinero/100))
    total = precioFinal

    await fetch('http://localhost:3004/boleta', 
    {method: 'POST', body: JSON.stringify(boleta), 
    headers: {'Content-Type': 'application/json'}})
    res.render('index',{total: precioFinal})
})

app.get('/', async (req, res) =>{
    res.render('index',{total: total})
})






app.listen(PORT, () => console.log(`Escuchando en http://localhost/${PORT}/`))