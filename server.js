const express = require('express');

const app = express()

const port = 3000

const courses = {
  subjects : [
    {
      id :0,
      name: "Mathematics",
      text: `Mathematics is the study of numbers, quantities, and shapes. It provides a foundation for solving a wide range of real-world problems and is crucial in fields like science, engineering, and finance.`,
      ready: 1,
      image: '/images/math.png'
    },
    {
      id :1,
      name: "History",
      text: `History is the record of past events and the study of human societies, cultures, and their evolution over time. It helps us understand the present by examining the past.`,
      ready: 0,
      image: '/images/history.png'
    },
    {
      id :2,
      name: "Engineering",
      text: `Engineering is the application of scientific and mathematical principles to design, create, and improve technologies and systems, ranging from bridges to computer software.`,
      ready: 0,
      image: '/images/engineer.png'
    },
    {
      id :3,
      name: "Arts",
      text: `The arts encompass a wide range of creative expressions, including visual arts, performing arts, literature, and music. They reflect human creativity and culture.`,
      ready: 0,
      image: '/images/arts.png'
    },
    {
      id :4,
      name: "Languages",
      text: `Languages are systems of communication used by humans. They play a vital role in cultural identity and allow people to connect and share ideas.`,
      ready: 0,
      image: '/images/languages.png'
    },
    {
      id :5,
      name: "Finances",
      text: `Finances involve managing money and resources. This includes budgeting, investing, saving, and making financial decisions to achieve personal and economic goals.`,
      ready: 0,
      image: '/images/finances.png'
    },
    {
      id :6,
      name: "Buisness",
      text: `Business encompasses the activities of buying, selling, and producing goods and services. It involves entrepreneurship, management, marketing, and various aspects of commerce.`,
      ready: 0,
      image: '/images/buisness.png'
    },
    {
      id :7,
      name: "Science",
      text: `Science is the systematic study of the natural world and the processes that govern it. It seeks to understand the fundamental laws and principles governing our universe.`,
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

app.get('/about-us',(req,res)=>{
  res.render('pages/about-us', {courses})
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
