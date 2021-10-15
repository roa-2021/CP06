const express = require('express')
const db = require('../db/list')

const router = express.Router()

//get item / select
router.get('/', (req, res) => {
   db.getListItems().then(result => {
       return res.json(result) //returns object of rows
    })
})

router.get('/first', (req,res) => {
    
    db.getFirstListItem().then(result => {
        return res.json(result)
    })
})

//post item / insert
router.post('/', (req,res) => {
    const item = req.body.item
    db.addListItem(item).then(result => {
        return res.json(result) //returns id of inserted row
    })
})

//patch item / update
router.patch('/:id', (req,res) => {
    //receive and then send an object to DB
    const id = req.params.id
    const item = req.body.item
    db.updateListItem(id,item).then(result => {
        return res.json(result) //returns 1 if true, 0 if false
    })
})

//delete item / delete
router.delete('/:id', (req,res) => {
    //receive object with id to delete
    const id = req.params.id

    listItems = db.deleteListItem(id).then(result => {
        return res.json(result) //returns 1 if true, 0 if false
    })
})

module.exports = router
