import React,{useState} from 'react';
//import useState hook from react library
import './App.css';

//component App
function App() {

  const [items, setItems] = useState([
    { name: "Buy shopping"},
    { name: "Clean bathroom"},
    { name: "Car's MOT" }
  ])
  //const [newItem, setNewItem] = useState("")

  //get items and return jsx elem how we want to look like
  //map transform (from arr of obj to arr of str)
  //unique by position
  const itemNodes = items.map((item, index) => {
    return (
      <li key={index}>
        {item.name}
      </li>
    )
  });

  //new state
  const [newItem, setNewItem] = useState("");
  //event listener pass event obj to our callback (handleInput) ..grap it ,get target value ,change state (newItem) by using function provided(setNewItem)
  const handleInput = (event) => {
    setNewItem(event.target.value);
  }


  //add staff - use form(submit - grap from ouside end save it by post request)
  const saveNewItem = (event) => {
    //default behavior is to send staff and reload page
    event.preventDefault();
    const copyItems = [...items];//get same size new array with all staff from old one
    copyItems.push({name: newItem});//push new obj
    setItems(copyItems);//change state always using func provided
    setNewItem("");//reset input

  }

 

  return (
    <div>

      <h1>ToDo's </h1>


      <ul>
        {itemNodes}
      </ul>

      <form onSubmit={saveNewItem}>
        <label htmlFor="new-item">Add a new item:</label>
        <input id="new-item" type="text" onChange={handleInput}/>
        <input type="submit" value="Save New Item" />
      </form>

     
     
    </div>
  );
 
}

export default App;
