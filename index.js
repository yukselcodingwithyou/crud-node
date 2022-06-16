const express = require('express')
const app = express()
const port = 3000


app.get('/member', (req, res) => {
  res.send('GET')
})

app.post('/member', (req, res) => {
    res.send('POST')
})

app.put('/member', (req, res) => {
    res.send('PUT')
})


app.delete('/member', (req, res) => {
    res.send('Got a DELETE request at /user')
})

 
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})
