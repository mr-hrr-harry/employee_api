const express = require('express')
const router = express.Router()

const {selectAll, selectOne, insertOne, updateOne, deleteEmployee} = require('../controller/reqHandler')

router.route('/').get(selectAll).put(insertOne)
router.route('/:eID').get(selectOne).patch(updateOne).delete(deleteEmployee)

module.exports = router