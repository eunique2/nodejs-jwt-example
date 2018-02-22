const router = require('express').Router()
const controller = require('./user.controller')


router.post('/list', controller.list)
router.post('/assign-admin/:username', controller.assignAdmin)

module.exports = router
