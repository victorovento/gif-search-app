import React, { useState } from "react";
import AddCategory from "./components/AddCategory";

export const GifExpertApp = () => {

  const [categories, setCategories] = useState(["One Punch", "Samurai X", "Dragon Ball"]);

  // const handleAdd = () => {
  //   setCategories([...categories, 'HunterXHunter']);
  // }
  return (
    <>
      <h2>GIF Search Engine</h2>
      <AddCategory />
      <hr />
      {/* <button onClick={handleAdd}>Agregar</button> */}
      <ol>
        {
          categories.map((category) => {
            return <li key={category}> {category}</li>
          })
        }
      </ol>
    </>
  );
}

