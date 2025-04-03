import React, { useState } from "react";
import { FaTrashRestoreAlt } from "react-icons/fa";
import { FaEdit } from "react-icons/fa";

const TodoApp = () => {
  let [items, setItems] = useState([
    { id: 1, label: "HTML", checked: true },
    { id: 2, label: "CSS", checked: true },
    { id: 3, label: "JAVASCRIPT", checked: false },
  ]);
  let [newItem, setNewItem] = useState("");
  let [isEditing, setisEditing] = useState(false);
  let [currentEleId, setcurrentEleId] = useState(null);

  let handleChecked = (id) => {
    let newListItems = items.map((item) => {
      return item.id === id ? { ...item, checked: !item.checked } : item;
    });
    setItems(newListItems);
  };

  let handleAddorSaveItem = () => {
    if (isEditing) {
      let newListItems = items.map((item) => {
        return item.id === currentEleId ? { ...item, label: newItem } : item;
      });
      setItems(newListItems);
      setcurrentEleId(null);
      setNewItem("");
      setisEditing(false);
    } else {
      setItems([...items, { id: items.length + 1, label: newItem, checked: false }]);
      setNewItem("");
    }
  };

  let handleUpdate = (id) => {
    let listItem = items.find((item) => item.id === id);
    setNewItem(listItem.label);
    setisEditing(true);
    setcurrentEleId(id);
  };

  let handleDelete = (id) => {
    let newItems = items
      .filter((item) => item.id !== id)
      .map((item, index) => {
        return { ...item, id: index + 1 };
      });
    setItems(newItems);
  };

  return (
    <>
      <style>
        {`
          * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
            font-family: Arial, sans-serif;
          }
          
          main {
            max-width: 600px;
            margin: 40px auto;
            padding: 20px;
            background-color: #181818;
            border-radius: 15px;
            box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
            text-align: center;
          }
          
          h1 {
            font-size: 32px;
            margin-bottom: 30px;
            color: #00d1ff;
            font-weight: bold;
            letter-spacing: 1px;
            text-shadow: 0px 4px 8px rgba(0, 209, 255, 0.5), 0px 0px 12px rgba(0, 209, 255, 0.75);
          }
          
          .input-container {
            display: flex;
            justify-content: space-between;
            align-items: center;
            margin-bottom: 20px;
          }
          
          input[type="text"] {
            flex: 1;
            padding: 10px;
            font-size: 16px;
            border: 2px solid #555;
            background-color: #333;
            color: #f4f4f4;
            border-radius: 5px;
            outline: none;
            margin-right: 10px;
            transition: border-color 0.3s, background-color 0.3s;
          }
          
          input[type="text"]:focus {
            border-color: #00d1ff;
            background-color: #222;
          }
          
          button {
            padding: 10px 20px;
            background-color: #00d1ff;
            color: #fff;
            font-size: 16px;
            border: none;
            border-radius: 5px;
            cursor: pointer;
            transition: background-color 0.3s, transform 0.2s, box-shadow 0.3s;
          }
          
          button:hover {
            background-color: #0056b3;
            transform: scale(1.05);
            box-shadow: 0px 4px 8px rgba(0, 123, 255, 0.4);
          }
          
          ul.todo-list {
            list-style: none;
            padding: 0;
          }
          
          li.item {
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding: 12px 15px;
            background-color: #242424;
            border: 1px solid #333;
            border-radius: 10px;
            margin-bottom: 10px;
            transition: transform 0.2s, box-shadow 0.3s;
          }
          
          li.item:hover {
            transform: scale(1.02);
            box-shadow: 0 6px 12px rgba(255, 255, 255, 0.1);
          }
          
          input[type="checkbox"] {
            margin-right: 10px;
            transform: scale(1.2);
            cursor: pointer;
          }
          
          label {
            flex: 1;
            font-size: 16px;
            color: #ddd;
            text-align: left;
            transition: color 0.3s;
          }
          
          label:hover {
            color: #fff;
          }
          
          .edit-icon,
          .delete-icon {
            font-size: 20px;
            cursor: pointer;
            margin-left: 10px;
            transition: color 0.3s, transform 0.2s;
          }
          
          .edit-icon {
            color: #4caf50;
          }
          
          .edit-icon:hover {
            color: #28a745;
            transform: scale(1.2);
          }
          
          .delete-icon {
            color: #e91e63;
          }
          
          .delete-icon:hover {
            color: #f50057;
            transform: scale(1.2);
          }
          
          ul.todo-list::-webkit-scrollbar {
            width: 8px;
          }
          
          ul.todo-list::-webkit-scrollbar-thumb {
            background-color: #444;
            border-radius: 10px;
          }
          
          ul.todo-list::-webkit-scrollbar-thumb:hover {
            background-color: #555;
          }
        `}
      </style>

      <main>
        <h1>Todo App</h1>
        <div className="input-container">
          <input
            type="text"
            value={newItem}
            placeholder="Add New Item"
            onChange={(e) => setNewItem(e.target.value)}
          />
          <button onClick={handleAddorSaveItem}>{isEditing ? "Save" : "Add"}</button>
        </div>
        <ul className="todo-list">
          {items.map((item) => (
            <li key={item.id} className="item">
              <input
                type="checkbox"
                checked={item.checked}
                onChange={() => handleChecked(item.id)}
              />
              <label>{item.label}</label>
              <FaEdit
                className="edit-icon"
                onClick={() => handleUpdate(item.id)}
              />
              <FaTrashRestoreAlt
                className="delete-icon"
                onClick={() => handleDelete(item.id)}
              />
            </li>
          ))}
        </ul>
      </main>
    </>
  );
};

export default TodoApp;
