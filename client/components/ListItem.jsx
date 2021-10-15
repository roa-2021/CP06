import React, {useState} from 'react'

import { deleteListItem, updateListItem } from '../api/list'


const ListItem = (props) => {

    const [isEditing, setEditing] = useState(false);
    const [item, setItem] = useState("")

    
    function handleChange(e) {
        setItem(e.target.value)
    }

   function handleSubmit(e) {
       e.preventDefault()
        //send api patch query
       updateListItem(props.id,item).then(res => {
           setItem("") //clear the field
           setEditing(false) //hide the form
           props.editItem(props.id, item) //callback prop to update state on parent (the list)
       })

   }

    function handleDelete(e) {
        e.preventDefault()
        //send api delete query
        deleteListItem(props.id).then(res => {
            props.deleteItem(props.id)
        })
    }

    function handleEdit(e) {
        e.preventDefault()
        setEditing(!isEditing)
    }

    return (
        <div className="list-item">
            <p>{props.item}</p>
            <div className="action-container">
                <p className="action" onClick={(e) => handleDelete(e)}>delete</p>
                <p className="action" onClick={(e) => handleEdit(e)}>edit</p>
                {isEditing && 
                    <form onSubmit={handleSubmit}>
                        <input type="text" onChange={handleChange} placeholder={props.item} />
                        <button>Edit</button>
                    </form>}
            </div>
        </div>
    )
}

export default ListItem
