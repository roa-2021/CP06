import React, {useState, useEffect} from 'react'

import ListItem from './ListItem'
import TaskForm from './TaskForm'

import { getListItems, getFirstListItem } from '../api/list'

const ToDoList = () => {
    
    const [listItems, setListItems] = useState([]);
    const [firstListItem, setFirstListItem] = useState([]);

    useEffect(() => {
        getListItems()
            .then(res =>
                setListItems(res)   
            )
        getFirstListItem()
             .then(res => {
            setFirstListItem(res)
        })

    }, [])

    
    function deleteItem(id) {
        const remainingTasks = listItems.filter(item => id !== item.id);
        setListItems(remainingTasks);
    }

    function editItem(id,item) {
        const editedListItems = listItems.map(task => {
            // if this task has the same ID as the edited task
              if (id === task.id) {
                //
                return {...task, item: item}
              }
              return task;
            });
            setListItems(editedListItems);
    }

    function addItem(task) {
        setListItems([...listItems, task])
    }

    return (
        <div className="list-container">
            <TaskForm addItem={addItem} />
            <h2>Tasks</h2>
            <p>first list item: {firstListItem.item}</p>
            
            {listItems.map(item => {
                return (
                    <ListItem 
                        item={item.item} 
                        id={item.id} 
                        key={item.id} 
                        deleteItem={deleteItem}
                        editItem={editItem}
                    />
                )
            })}
            
        </div>
    )
}

export default ToDoList
