import React, { useState } from "react";
import { addMenu } from "../../services/allApis"; 
import "./AddMenu.css";

const AddMenu = () => {
  const [menuName, setMenuName] = useState("");
  const [description, setDescription] = useState("");
  const [items, setItems] = useState([{ itemName: "", description: "", price: "" }]);

  const handleItemChange = (index, event) => {
    const { name, value } = event.target;
    const updatedItems = [...items];
    updatedItems[index][name] = name === "price" ? parseFloat(value) || "" : value;
    setItems(updatedItems);
  };

  const addItem = () => {
    setItems([...items, { itemName: "", description: "", price: "" }]);
  };

  const removeItem = (index) => {
    const updatedItems = [...items];
    updatedItems.splice(index, 1);
    setItems(updatedItems);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!menuName || !description || items.some(item => !item.itemName || !item.price)) {
      alert("Please fill in all required fields.");
      return;
    }

    try {
      const response = await addMenu(
        { menuName, description, items }, 
        { "Content-Type": "application/json" } 
      );
   console.log(response)
      alert(response.data.message);
      setMenuName("");
      setDescription("");
      setItems([{ itemName: "", description: "", price: "" }]);
    } catch (error) {
      console.error("Error adding menu:", error);
      alert("Failed to add menu. Please try again.");
    }
  };

  return (
    <div className="container">
      <h2>Add New Menu</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Menu Name:</label>
          <input type="text" value={menuName} onChange={(e) => setMenuName(e.target.value)} required />
        </div>

        <div>
          <label>Description:</label>
          <textarea value={description} onChange={(e) => setDescription(e.target.value)} />
        </div>

        <h3>Menu Items</h3>
        {items.map((item, index) => (
          <div key={index} className="menu-item">
            <input
              type="text"
              name="itemName"
              placeholder="Item Name"
              value={item.itemName}
              onChange={(e) => handleItemChange(index, e)}
              required
            />
            <input
              type="text"
              name="description"
              placeholder="Description"
              value={item.description}
              onChange={(e) => handleItemChange(index, e)}
            />
            <input
              type="number"
              name="price"
              placeholder="Price"
              value={item.price}
              onChange={(e) => handleItemChange(index, e)}
              required
            />
            <button type="button" className="remove-btn" onClick={() => removeItem(index)}>Remove</button>
          </div>
        ))}
        
        <button type="button" className="add-item-btn" onClick={addItem}>Add Item</button>
        <button type="submit" className="submit-btn">Submit Menu</button>
      </form>
    </div>
  );
};

export default AddMenu;
