const express = require('express')
const router = express.Router()
const { Gpio } = require('onoff')
const LED = new Gpio(4, 'out')

router.post('/ligar', (req, res) => {
    led.writeSync(1)
    res.json({
        'status': 'ok',
        'data': 'led aceso'
    })
})

router.post('/desligar', (req, res) => {
    led.writeSync(0)
    res.json({
        'status': 'ok',
        'data': 'led apagado'
    })
})

module.exports = router