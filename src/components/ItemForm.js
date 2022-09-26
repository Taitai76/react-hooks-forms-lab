import React, { useState }  from "react";


function ItemForm({
  onItemFormSubmit, 
  gCategory,
  handleFormCat,
  handleFormName,
}) {
  
  

  return (
    <form className="NewItem" onSubmit={onItemFormSubmit}>
      <label>
        Name:
        <input onChange={handleFormName} type="text" name="name" />
      </label>

      <label>
        Category:
        <select onChange={handleFormCat} name="category" value={gCategory}>
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </label>

      <button type="submit">Add to List</button>
    </form>
  );
}

export default ItemForm;
