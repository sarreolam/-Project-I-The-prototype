const express = require('express');

const app = express()

const port = 3000

const courses = {
  subjects : [
    {
      id :0,
      name: "Mathematics",
      text: `Some quick example text to build on the card title and make up the bulk of the card's content.`,
      ready: 1,
      image: '/images/math.png'
    },
    {
      id :1,
      name: "History",
      text: `Some quick example text to build on the card title and make up the bulk of the card's content.`,
      ready: 0,
      image: '/images/history.png'
    },
    {
      id :2,
      name: "Engineering",
      text: `Some quick example text to build on the card title and make up the bulk of the card's content.`,
      ready: 0,
      image: '/images/engineer.png'
    },
    {
      id :3,
      name: "Arts",
      text: `Some quick example text to build on the card title and make up the bulk of the card's content.`,
      ready: 0,
      image: '/images/arts.png'
    },
    {
      id :4,
      name: "Languages",
      text: `Some quick example text to build on the card title and make up the bulk of the card's content.`,
      ready: 0,
      image: '/images/languages.png'
    },
    {
      id :5,
      name: "Finances",
      text: `Some quick example text to build on the card title and make up the bulk of the card's content.`,
      ready: 0,
      image: '/images/finances.png'
    },
    {
      id :6,
      name: "Buisness",
      text: `Some quick example text to build on the card title and make up the bulk of the card's content.`,
      ready: 0,
      image: '/images/buisness.png'
    },
    {
      id :7,
      name: "Science",
      text: `Some quick example text to build on the card title and make up the bulk of the card's content.`,
      ready: 0,
      image: '/images/science.png'
    },
  ]
}
let singedIn = false 
let error = ''
let name = ''

const users = {
  'ADMIN': {
    email: "yo@yo.com", 
    pass: 'ADMIN'
  }

}

app.use(express.json());
app.use(express.urlencoded({ extended:true }));
app.use(express.static(__dirname + '/public'));
app.set('view engine', 'ejs');



app.get('/', (req, res)=> {

  res.redirect('/home')
});



app.get('/log-in', (req, res)=>{
  res.render('pages/log-in', {error})
  error=''
})

app.post('/log-in',(req, res)=>{
  if (req.body.user && req.body.pass){
    if (req.body.user in users) {
      if (req.body.pass !== users[req.body.user].pass) {
        console.log('buenas')
        error = "Incorrect password!!!!"
      }else{
        singedIn=true
        name=req.body.user
        res.redirect('/courses')
        res.end()
        return
      }
    }else{
      error = "User not found!!!!"
    }
  }else{
    error = "There are missing fields to fill out"
  }
  res.redirect('/log-in')
})

app.get('/sing-in', (req, res)=>{
  res.render('pages/sing-in', {error})
  error=''
})


app.post('/sing-in',(req, res)=>{
  if (req.body.user && req.body.email && req.body.pass && req.body.copass){
    if (req.body.user in users) {
      error = "User not available!!!!"
    }
    else if (req.body.pass !== req.body.copass) {
      error = "Passwords do not matchs!!!!"
    }else{
      users[req.body.user] = { email: req.body.email, pass: req.body.pass}
      error= "Usuario creado exitosamente"
      res.redirect('/log-in')
      res.end()
      return
    }
  }else{
    error = "There are missing fields to fill out"
  }
  res.redirect('/sing-in')
})


app.get('/home',(req,res)=>{
  res.render('pages/index',{singedIn})
})

app.get('/courses',(req,res)=>{
  res.render('pages/courses', {singedIn, courses, name})
})

app.get('/courses/:id',(req,res)=>{
  const id = req.params.id || null
  res.render('pages/single-course', {singedIn,id})
})

app.get('/courses/quiz/:id',(req,res)=>{
  res.render('pages/quiz')
})

app.get('/about-us',(req,res)=>{
  res.render('pages/about-us', {singedIn, courses})
})

app.post('/sing-out', (req, res)=>{
  console.log("buenas")
  singedIn=false
  res.redirect('/home')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
