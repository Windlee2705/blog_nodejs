const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
    var a =2, b=3;
    const c=a+b+3;
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})