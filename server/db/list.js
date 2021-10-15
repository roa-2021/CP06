const connection = require('./connection')

//create / insert
//receives an item name as name
function addListItem(item, db = connection) {
    return db('list')
        .insert({item: item})
}

//read / select
function getListItems(db = connection) {
    return db('list')
        .select()
        // .orderBy('item', 'desc')
}

//update / update
//receives an object with item id and name
function updateListItem(id,item, db = connection) {
    return db('list')
        .where({id: id})
        .update({item: item})
}

//delete / delete
//receives an id 
function deleteListItem(id, db = connection) {
    return db('list')
        .where({id: id})
        .delete()
}

function getFirstListItem(db = connection) {
    return db('list')
    .first()
}

module.exports = {
    addListItem,
    getListItems,
    updateListItem,
    deleteListItem,
    getFirstListItem
}