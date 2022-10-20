const express = require('express')
const { default: Scrap } = require('./src/scrap')
const scrap = Scrap();
// Create express instance
const app = express()

// Require API routes
app.get('/', async (req, res) => {
    
    res.send(await scrap.server('https://dredimarferreira.jusbrasil.com.br/modelos-pecas/656287570/modelo-resp-recurso-especial-trafico-previlegiado-art33-4-lei-n-11343-2006'))

  })


// Export the server middleware
module.exports = {
  path: '/api',
  handler: app
}