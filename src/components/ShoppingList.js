import React, { useState } from "react";
import ItemForm from "./ItemForm";
import Filter from "./Filter";
import Item from "./Item";
import { v4 as uuid } from "uuid";

function ShoppingList({ items, setItems }) {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [search, onSearchChange]= useState("");
  const [gCategory, CategoryChange] = useState("Produce")
  const [fName, fNameChange]= useState("")

  function handleCategoryChange(event) {
    setSelectedCategory(event.target.value);
  }
  function handleSearchChange(event){
    onSearchChange(event.target.value)
  
  }

  function handleFormCat(event){
    CategoryChange(event.target.value);
  }

  function handleFormName(event){
    fNameChange(event.target.value)
  }


  function onItemFormSubmit(event){
    event.preventDefault();
    const newItem = {
      id: uuid(), // the `uuid` library can be used to generate a unique id
      name: fName,
      category: gCategory,
    };

    addElement(newItem);
    console.log(newItem)
  }

  function addElement(element) {
    setItems([...items, element]);
  }

  


  const itemsToDisplay = items.filter((item) => {
    if (selectedCategory === "All") return true;

    return (item.category === selectedCategory);
  });


  return (
    <div className="ShoppingList">
      <ItemForm onItemFormSubmit={onItemFormSubmit} gCategory={gCategory} handleFormCat={handleFormCat} 
      handleFormName={handleFormName} />

      <Filter search={search} onSearchChange={handleSearchChange} onCategoryChange={handleCategoryChange} />
      <ul className="Items">
        {
        itemsToDisplay.filter((val)=>{
          if (search===""){
            return val
          }else if (val.name.toLowerCase().includes(search.toLowerCase())){
            return val;
          }
        }).map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))}
      </ul> 
    </div>
  );
}

export default ShoppingList;
