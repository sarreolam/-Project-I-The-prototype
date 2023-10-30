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

app.use(express.json());
app.use(express.urlencoded({ extended:true }));

app.use(express.static(__dirname + '/public'));

app.set('view engine', 'ejs');


app.get('/', (req, res)=> {
  res.redirect('/home')
});

app.get('/log-in', (req, res)=>{
  res.render('pages/log-in')
})
app.get('/sing-in', (req, res)=>{
  res.render('pages/sing-in')
})
app.get('/home',(req,res)=>{
  res.render('pages/index')
})

app.get('/courses',(req,res)=>{
  res.render('pages/courses', {courses})
})
app.get('/courses/:id',(req,res)=>{
  const id = req.params.id || null
  res.render('pages/single-course', {id})
})

app.get('/courses/quiz/:id',(req,res)=>{
  res.render('pages/quiz')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
