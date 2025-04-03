import React, { useState } from "react";
import { FaTrashRestoreAlt } from "react-icons/fa";
import { FaEdit } from "react-icons/fa";

const Content = () => {
    let [items, setItems] = useState([
        { id: 1, label: "HTML", checked: true },
        { id: 2, label: "CSS", checked: true },
        { id: 3, label: "JAVASCRIPT", checked: false },
    ]);
    let [newItem, setNewItem]= useState("");
    let [isEditing , setisEditing] = useState(false)
    let [ currentEleId , setcurrentEleId]= useState( null)
    let handleChecked = (id) => {
         let newListItems = items.map((item) => {
             return item.id === id ? { ...item, checked: !item.checked } : item;
         });
         setItems(newListItems);
    };
    let handleAddorSaveItem = () => {
        if(isEditing){
               let newListItems = items.map(( item) => {
                return item.id === currentEleId ? {...item,label : newItem } : item
               })
               setItems( newListItems)
               setcurrentEleId( null)
               setNewItem( "")
               setisEditing( false)
        }
        else{
            setItems( [ ...items, { id: items.length+1, label : newItem, checked: false }])
            setNewItem( " ")
        }
        

    }

    let handleUpdate = (id) => {
        let listItem = items.find( item=> item.id ===id)
        setNewItem( listItem.label )
        setisEditing( true)
        setcurrentEleId( id )
    }
    let handleDelete = (id) => {
        let newItems = items.filter( item => item.id !== id).map( ( item,index )=> { return{ ...item,id : index+1}})
        setItems ( newItems )
    }
    return (
        <main>
            <div>
                <input type="text" 
                value={newItem}
                placeholder="Add New Item"
                onChange={ (e)=>{ setNewItem(e.target.value)}}/>
                <button onClick = { handleAddorSaveItem } > { isEditing ? "Save" : "Add"}</button>
            </div>
            <ul>
                {items.map((item) => {
                    return (
                        <li key={item.id} className="item">
                            <input
                                type="checkbox"
                                checked={item.checked}
                                onChange={ ()=> handleChecked(item.id)}
                            />
                            <label>{item.label}</label>
                            <FaEdit role="button" tabIndex={0} onClick={() => handleUpdate(item.id)}/>
                            <FaTrashRestoreAlt role="button" tabIndex={0} onClick={ () => handleDelete(item.id)} />
                        </li>
                    );
                })}
            </ul>
        </main>
    );
};

export default Content;
