const express = require('express')
const app = express()
const port = 3000
app.use(express.static('public'))

///Routes
// app.get('/member', (req, res) => {
//   res.send('GET')
// })

// app.post('/member', (req, res) => {
//     res.send('POST')
// })

// app.put('/member', (req, res) => {
//     res.send('PUT')
// })


// app.delete('/member', (req, res) => {
//     res.send('Got a DELETE request at /user')
// })

 
//Middleware

const myLogger = function (req, res, next) {
    console.log('LOGGED')
    next()
  }

app.use(myLogger)

const requestTime = function (req, res, next) {
    req.requestTime = Date.now()
    next()
  }

  app.use(requestTime)

  app.get('/', (req, res) => {
    let responseText = 'Hello World!<br>'
    responseText += `<small>Requested at: ${req.requestTime}</small>`
    res.send(responseText)
  })   


  

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})
