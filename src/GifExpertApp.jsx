import React from "react";
import { useState } from "react";
import { AddCategory, GifGrid } from "./components";

//para actualizar el state usamos el setCategories
//con un nuevo arreglo
export const GifExpertApp = () => {
    const [categories, setCategories] = useState(["Batman"]);

    const onAddCategory = (newCategory) => {
        //si la nueva categoria ya existe no la incluyas
        if (categories.includes(newCategory)) return;
        // console.log(newCategory);
        // categories.push(newCategory);
        setCategories([newCategory, ...categories]);
    };
    return (
        <>
            <h1>GifExpertApp</h1>
            {/* <AddCategory setCategories={setCategories} /> */}
            {<AddCategory onNewCategory={(event) => onAddCategory(event)} />}

            <ol>
                {categories.map((category) => (
                    <GifGrid key={category} category={category} />
                ))}
            </ol>
        </>
    );
};
