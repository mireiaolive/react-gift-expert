import React, { useState } from "react";
import PropTypes from "prop-types";

export const AddCategory = ({ onNewCategory }) => {
    const [inputValue, setInputValue] = useState(" ");

    //event.target.value
    const onInputChange = ({ target }) => {
        setInputValue(target.value);
    };

    const onSubmit = (event) => {
        event.preventDefault();
        if (inputValue.trim().length <= 1) return;

        // setCategories((categories) => [inputValue, ...categories]);
        onNewCategory(inputValue.trim());
        setInputValue("");
    };

    return (
        <form onSubmit={(event) => onSubmit(event)} aria-label="form">
            <input
                type="text"
                placeholder="search gifs"
                value={inputValue}
                onChange={(event) => onInputChange(event)}
            />
        </form>
    );
};

AddCategory.propTypes = {
    onNewCategory: PropTypes.func.isRequired,
};
