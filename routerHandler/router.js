const express = require('express')
const router = express.Router()

const {selectAll, selectOne, insertOne, updateOne, deleteOne} = require('../controller/reqHandler')

router.route('/').get(selectAll).post(insertOne)
router.route('/:eID').get(selectOne).patch(updateOne).delete(deleteOne)

module.exports = router