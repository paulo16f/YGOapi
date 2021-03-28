const path = require('path')
const express = require('express')
const hbs = require('hbs')
const search = require('./utils/search')
const random = require('./utils/random')

const app = express()

//DEFINE PATHS FOR EXPRESS CONIF
const publicDirecotryPath = path.join(__dirname,'../public')
const viewsPath= path.join(__dirname, '../templates/views')
const partialsPath = path.join(__dirname, '../templates/partials')

//SETUP HANDLEBARS ENGINE AND VIEWS LOCATION
app.set('view engine','hbs')
app.set('views',viewsPath)
hbs.registerPartials(partialsPath)

// SETUP STATIC DIRECOTRY TO SERVE
app.use(express.static(publicDirecotryPath))


app.get('',(req,res)=>{
    res.render('index',{
        name:'P6',
        lvl: "Another Level"
    })
})

app.get('/random',(req,res)=>{
    res.render('random',{
        name:'Random',
        lvl: '???'
    })
})

app.get('/search',(req,res)=>{
    res.render('search',{
        name:'Search for a card',
        lvl: "Trust in the hearth of the cards"
    })
})

app.get('/searchCard', (req,res) =>{
    if(!req.query.name){
        return res.send({
            error: 'You must provide a card name'
        })
    } 

    search(req.query.name, (error, cardData = {}) =>{
        if(error){
            return res.send({error})
        }

        res.send({
            cardData
        })
    }) 
})

app.get('/randomCard', (req,res) =>{

    random((error,cardData) =>{
        if(error){
            return res.send({error})
        }

        res.send({
            cardData
        })
    }) 
})

app.get('*',(req,res)=>{
    res.render('404', {
        name:'404',
        errormMessage:'Page not found.'
    })
})

app.listen(3000, ()=>{
    console.log('Server is up on port 3000.')
})