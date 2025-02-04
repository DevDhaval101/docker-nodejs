const express = require('express')
const path = require('node:path')
const PORT = 8000


const app = express()

app.use(express.static(path.resolve(__dirname, 'dist')))

app.get('/', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'dist', 'index.html'))
})

app.listen(PORT, () => console.log(`listening on port ${PORT}`))