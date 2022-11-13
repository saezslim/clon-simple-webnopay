import express from 'express'

const app = express()
const PORT = 3005
app.set('view engine', 'ejs')

app.use(express.static('public'));


app.get('/', (req, res) =>{
    //console.log(__dirname)
    res.render('index')
})

app.listen(PORT, () => console.log(`Escuchando en http://localhost/${PORT}/`))