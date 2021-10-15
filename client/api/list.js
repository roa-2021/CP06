import request from 'superagent'

const apiBase = '/api/list'

//get list items from the database
export function getListItems() {
    return request.get(apiBase).then(res => res.body)
}

export function getFirstListItem() {
    return request.get(`${apiBase}/first`).then(res => res.body)
}

//update list item from the database
export function updateListItem(id, item) {
    //you have to send an OBJECT not a STRING via API
    const itemObj = {item: item}
   return request.patch(`${apiBase}/${id}`).send(itemObj).then(res => res.body)
}

//insert list item into the database
export function addListItem(item) {
    const itemObj = {item: item}
    return request.post(apiBase).send(itemObj).then(res => res.body)
}

//delete list item from the database
export function deleteListItem(id) {
    return request.delete(`${apiBase}/${id}`).then(res => res.body)
}